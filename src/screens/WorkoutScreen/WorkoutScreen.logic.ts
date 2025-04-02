import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Exercise, Workout, WithUserMeta } from 'src/types';
import { useCompleteWorkoutMutation } from 'src/requests/hooks/useCompleteWorkoutMutation';
import { useGetWorkout } from 'src/requests/hooks/useGetWorkout';
import { useBinaryState } from 'src/hooks/useBinaryState';
import { useWorkoutStore } from 'src/state';

export const useWorkoutLogic = (workoutId: string) => {
  const { completedExerciseIds, clearCompletedExercises } = useWorkoutStore();
  const [userSettings, setUserSettings] = useState<WithUserMeta<{}>>({
    completed: false,
    notes: '',
    reps: 14,
    weight: 0,
  });
  const { data, refetch, isLoading } = useGetWorkout(workoutId);
  const { mutate: completeWorkoutMutation } = useCompleteWorkoutMutation();
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const workoutCompleted = useMemo(() => false, [data]);
  const unCompletedExerciseIds = useMemo(() => {
    return (
      data?.data?.exercises
        ?.map(({ documentId }) => documentId!)
        ?.filter((id) => !completedExerciseIds.includes(id)) || []
    );
  }, [data?.data?.exercises, completedExerciseIds]);
  const [currentExerciseId, setCurrentExerciseId] = useState<string>(
    unCompletedExerciseIds[0],
  );
  const {
    value: isWorkoutInProgress,
    turnOn: runWorkout,
    turnOff: stopWorkout,
  } = useBinaryState(false);
  const [workoutScore, setWorkoutScore] = useState<number>(0);
  const [exercises, setExercises] = useState<WithUserMeta<Exercise>[]>(
    data?.data?.exercises?.map((ex) => ({
      ...(ex as unknown as Exercise),
      ...userSettings,
    })) || [],
  );

  const calculateWorkoutScore = useCallback(
    (completedIds: string[]) => {
      // Simple scoring algorithm - can be adjusted based on your needs
      const totalExercises = exercises.length;
      const completionPercentage = (completedIds.length / totalExercises) * 100;

      // Calculate score out of 100
      const newScore = Math.round(completionPercentage);
      setWorkoutScore(newScore);
    },
    [exercises, setWorkoutScore],
  );

  const startWorkout = () => {
    if (exercises.length === 0) {
      throw new Error('No exercises found for this workout');
    }
    runWorkout();

    setCurrentExerciseId(unCompletedExerciseIds[0]!);
    setExercises(
      exercises.map((ex) => ({
        ...ex,
        completed: false,
      })),
    );
  };

  const completeWorkout = useCallback(() => {
    completeWorkoutMutation(
      {
        workoutId,
      },
      {
        onSuccess() {
          stopWorkout();
          calculateWorkoutScore(completedExerciseIds);
          refetch();
        },
      },
    );
  }, [
    completeWorkoutMutation,
    workoutId,
    stopWorkout,
    calculateWorkoutScore,
    exercises,
  ]);

  const toggleExerciseCompletion = useCallback(
    (exerciseId: string) => {
      setExercises((prevExercises) =>
        prevExercises.map((ex) =>
          ex.documentId === exerciseId
            ? { ...ex, completed: !ex.completed }
            : ex,
        ),
      );
    },
    [setExercises],
  );

  const moveToNextExercise = useCallback(() => {
    const currentIndex = unCompletedExerciseIds.findIndex(
      (exId) => exId === currentExerciseId,
    );
    if (currentIndex < unCompletedExerciseIds.length - 1) {
      setCurrentExerciseId(unCompletedExerciseIds[currentIndex + 1]!);
    } else {
      completeWorkout();
    }
  }, [exercises, currentExerciseId, setCurrentExerciseId, completeWorkout]);

  const refreshWorkout = useCallback(() => {
    clearCompletedExercises();
    completeWorkoutMutation(
      {
        workoutId,
        completed: false,
      },
      {
        onSuccess() {
          stopWorkout();
          refetch();
          setExercises(
            exercises.map((ex) => ({
              ...ex,
              completed: false,
            })),
          );
        },
      },
    );
  }, [
    completeWorkoutMutation,
    workoutId,
    stopWorkout,
    setCurrentExerciseId,
    setExercises,
    clearCompletedExercises,
  ]);

  useEffect(() => {
    if (!currentExerciseId && unCompletedExerciseIds.length > 0) {
      setCurrentExerciseId(unCompletedExerciseIds[0]);
    }
    if (data?.data?.exercises) {
      setExercises(
        data.data?.exercises.map<WithUserMeta<Exercise>>((ex) => ({
          ...(ex as unknown as Exercise),
          ...userSettings,
        })),
      );
    }
    if (data?.data) {
      setSelectedWorkout(data.data);
    }
  }, [data]);

  return {
    selectedWorkout,
    currentExerciseId,
    isWorkoutInProgress,
    workoutCompleted,
    workoutScore,
    exercises,
    isLoading,
    startWorkout,
    completeWorkout,
    toggleExerciseCompletion,
    moveToNextExercise,
    refreshWorkout,
  };
};

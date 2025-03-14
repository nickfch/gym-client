import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { WorkoutHeader } from './components/WorkoutHeader';
import { ExerciseList } from './components/ExerciseList';
import { WorkoutScore } from './components/WorkoutScore';
import { WorkoutActions } from './components/WorkoutActions';

import { styles } from './WorkoutScreen.styles';
import { WorkoutScreenProps, WorkoutScreenState } from './WorkoutScreen.types';

export const WorkoutScreen: React.FC<WorkoutScreenProps> = ({
  navigation,
  route,
}) => {
  const [selectedWorkout, setSelectedWorkout] =
    useState<WorkoutScreenState['selectedWorkout']>(null);

  // State for workout progress
  const [currentExerciseId, setCurrentExerciseId] =
    useState<WorkoutScreenState['currentExerciseId']>('');
  const [workoutInProgress, setWorkoutInProgress] =
    useState<WorkoutScreenState['workoutInProgress']>(false);
  const [workoutCompleted, setWorkoutCompleted] =
    useState<WorkoutScreenState['workoutCompleted']>(false);
  const [workoutScore, setWorkoutScore] =
    useState<WorkoutScreenState['workoutScore']>(0);

  // Sample exercises for the selected workout
  // In a real app, this would be fetched from another API endpoint
  const [exercises, setExercises] = useState<WorkoutScreenState['exercises']>([
    {
      id: '1',
      name: 'Barbell Squat',
      sets: 4,
      reps: 8,
      weight: 135,
      restTime: 90,
      completed: false,
      notes: '',
    },
    {
      id: '2',
      name: 'Bench Press',
      sets: 4,
      reps: 8,
      weight: 115,
      restTime: 90,
      completed: false,
      notes: '',
    },
    {
      id: '3',
      name: 'Deadlift',
      sets: 3,
      reps: 6,
      weight: 185,
      restTime: 120,
      completed: false,
      notes: '',
    },
    {
      id: '4',
      name: 'Pull-up',
      sets: 3,
      reps: 10,
      weight: 0,
      restTime: 60,
      completed: false,
      notes: 'Use assistance band if needed',
    },
    {
      id: '5',
      name: 'Overhead Press',
      sets: 3,
      reps: 10,
      weight: 65,
      restTime: 60,
      completed: false,
      notes: '',
    },
  ]);

  // Calculate workout score whenever exercises change
  useEffect(() => {
    if (exercises.length > 0) {
      calculateWorkoutScore();
    }
  }, [exercises]);

  const calculateWorkoutScore = () => {
    // Simple scoring algorithm - can be adjusted based on your needs
    const completedExercises = exercises.filter((ex) => ex.completed).length;
    const totalExercises = exercises.length;
    const completionPercentage = (completedExercises / totalExercises) * 100;

    // Calculate score out of 100
    const newScore = Math.round(completionPercentage);
    setWorkoutScore(newScore);
  };

  const startWorkout = () => {
    setWorkoutInProgress(true);
    setWorkoutCompleted(false);
    setCurrentExerciseId(exercises[0].id);

    // Reset exercise completion status
    setExercises(
      exercises.map((ex) => ({
        ...ex,
        completed: false,
      })),
    );
  };

  const completeWorkout = () => {
    setWorkoutInProgress(false);
    setWorkoutCompleted(true);
    calculateWorkoutScore();
    // Here you would typically send the workout results to your backend
  };

  const toggleExerciseCompletion = (exerciseId: string) => {
    setExercises(
      exercises.map((ex) =>
        ex.id === exerciseId ? { ...ex, completed: !ex.completed } : ex,
      ),
    );
  };

  const moveToNextExercise = () => {
    const currentIndex = exercises.findIndex(
      (ex) => ex.id === currentExerciseId,
    );
    if (currentIndex < exercises.length - 1) {
      setCurrentExerciseId(exercises[currentIndex + 1].id);
    } else {
      // All exercises completed
      completeWorkout();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {selectedWorkout && (
        <WorkoutHeader
          workout={selectedWorkout}
          inProgress={workoutInProgress}
          completed={workoutCompleted}
        />
      )}

      <ExerciseList
        exercises={exercises}
        currentExerciseId={currentExerciseId}
        workoutInProgress={workoutInProgress}
        toggleCompletion={toggleExerciseCompletion}
      />

      <WorkoutScore score={workoutScore} completed={workoutCompleted} />

      <WorkoutActions
        workoutInProgress={workoutInProgress}
        workoutCompleted={workoutCompleted}
        onStart={startWorkout}
        onComplete={completeWorkout}
        onNext={moveToNextExercise}
        onRefresh={function () {}}
      />
    </SafeAreaView>
  );
};

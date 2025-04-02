import { useMemo } from 'react';
import { useGetUserWorkouts } from 'src/requests/hooks/useGetUserWorkouts';
import { NormalizedWorkout } from './UserFeedScreen.types';

const UPCOMING_WORKOUTS_LIMIT = 2;

export const useUserFeedLogic = () => {
  const { data, isLoading } = useGetUserWorkouts();
  const completedWorkoutIds = useMemo(
    () =>
      data?.data
        ?.filter(({ completed }) => completed)
        ?.map(({ documentId }) => documentId) || [],
    [data],
  );

  const normalizedData = useMemo(() => {
    const initValue: NormalizedWorkout = {
      data: {},
      items: [],
    };

    if (!data || !Array.isArray(data?.data)) {
      return initValue;
    }

    return data?.data.reduce<NormalizedWorkout>((acc, item) => {
      return {
        ...acc,
        items: [...acc.items, item.documentId],
        data: {
          ...acc.data,
          [item.documentId!]: item,
        },
      } as NormalizedWorkout;
    }, initValue as NormalizedWorkout);
  }, [data]);

  const uncompletedWorkoutIds = useMemo(
    () =>
      normalizedData.items
        .filter((wid) => !normalizedData.data[wid].completed)
        .slice(0, UPCOMING_WORKOUTS_LIMIT),
    [normalizedData],
  );

  const nearestWorkoutId = useMemo(
    () => uncompletedWorkoutIds[0],
    [uncompletedWorkoutIds],
  );

  const uncompletedWorkouts = useMemo(
    () => uncompletedWorkoutIds.map((id) => normalizedData.data[id]),
    [uncompletedWorkoutIds, normalizedData],
  );

  return {
    isLoading,
    normalizedData,
    nearestWorkoutId,
    uncompletedWorkoutIds,
    uncompletedWorkouts,
    completedWorkoutIds,
  };
};

import { useMemo } from 'react';
import { useGetUserWorkouts } from 'src/requests/hooks/useGetUserWorkouts';
import { NormalizedWorkout } from './UserFeedScreen.types';

const UPCOMING_WORKOUTS_LIMIT = 2;

export const useUserFeedLogic = () => {
  const { data, isLoading } = useGetUserWorkouts();
  const normalizedData = useMemo(() => {
    if (!data) {
      return {
        data: {},
        items: [],
      };
    }

    return data.data!.reduce<NormalizedWorkout>(
      (acc, item) => {
        return {
          ...acc,
          items: [...acc.items, item.documentId],
          data: {
            ...acc.data,
            [item.documentId!]: item,
          },
        } as NormalizedWorkout;
      },
      { data: {}, items: [] } as NormalizedWorkout,
    );
  }, [data]);

  const uncompletedWorkoutIds = useMemo(
    () =>
      normalizedData.items
        .filter((wid) => !normalizedData.data[wid].completed)
        .slice(0, UPCOMING_WORKOUTS_LIMIT),
    [normalizedData],
  );
  const nearestWorkoutId = useMemo(() => uncompletedWorkoutIds[0], []);

  return {
    isLoading,
    normalizedData,
    nearestWorkoutId,
    uncompletedWorkoutIds,
  };
};

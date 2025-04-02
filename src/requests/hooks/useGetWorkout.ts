import { useQuery } from '@tanstack/react-query';
import * as queryKeys from 'src/constants/queryKeys';
import { getWorkoutById } from '../workouts';

export const useGetWorkout = (workoutId: string) => {
  return useQuery({
    queryKey: [queryKeys.GET_WORKOUT, workoutId],
    queryFn: () => getWorkoutById(workoutId),
    // staleTime: 1000 * 60 * 60 * 24, // 24 hours
    // cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    refetchOnWindowFocus: false,
  });
};

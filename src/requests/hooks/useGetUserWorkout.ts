import { useQuery, UseQueryResult } from '@tanstack/react-query';
import * as queryKeys from 'src/constants/queryKeys';
import {
  requestUserWorkoutById,
  GetUserWorkout,
} from 'src/requests/request-workouts';

export const useGetUserWorkout = (
  workoutId: string,
): UseQueryResult<GetUserWorkout> => {
  return useQuery({
    queryKey: [queryKeys.GET_USER_WORKOUT, workoutId],
    queryFn: () => requestUserWorkoutById(workoutId),
  });
};

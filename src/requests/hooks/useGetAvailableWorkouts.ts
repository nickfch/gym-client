import { useQuery } from '@tanstack/react-query';
import * as queryKeys from 'src/constants/queryKeys';
import { getAvailableWorkouts } from '../workouts';

export const useGetAvailableWorkouts = (...args: any) => {
  return useQuery({
    queryKey: [queryKeys.GET_AVAILABLE_WORKOUTS, ...(args ? [args] : [])],
    queryFn: () => getAvailableWorkouts('name', 'type', 'duration'),
  });
};

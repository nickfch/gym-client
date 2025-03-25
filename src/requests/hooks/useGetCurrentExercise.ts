import { useQuery } from '@tanstack/react-query';

import { requestCurrentExerciseById } from '../exercises';
import * as queryKeys from 'src/constants/queryKeys';

export const useGetCurrentExercise = (exerciseId: string) => {
  return useQuery({
    queryKey: [queryKeys.GET_CURRENT_EXERCISE, exerciseId],
    queryFn: () => requestCurrentExerciseById(exerciseId),
  });
};

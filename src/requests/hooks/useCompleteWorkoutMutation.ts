import { useMutation } from '@tanstack/react-query';
import * as queryKeys from 'src/constants/queryKeys';
import { UserWorkout, Error } from 'src/types';
import { postCompleteWorkout } from '../workouts';

type PostCompleteWorkoutInput = {
  workoutId: string;
  completed?: boolean;
};

export const useCompleteWorkoutMutation = () => {
  return useMutation<UserWorkout, Error, PostCompleteWorkoutInput>({
    mutationKey: [queryKeys.POST_COMPLETE_WORKOUT],
    mutationFn: ({ workoutId, completed = true }) =>
      postCompleteWorkout(workoutId, completed) as Promise<UserWorkout>,
  });
};

import { WorkoutStack } from 'src/constants/navigation';

export type WorkoutStackParamList = {
  [WorkoutStack.WorkoutScreen]: {
    workoutId: string;
  };
  [WorkoutStack.WorkoutDetailsScreen]: {
    workoutId: string;
  };
  [WorkoutStack.PlanWorkoutScreen]: undefined;
};

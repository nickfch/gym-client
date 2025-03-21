import { Exercise, Workout } from 'src/types';
import { WorkoutStackScreenProps } from 'src/types/navigation.d';
import { WorkoutStack } from 'src/constants/navigation';

export type WorkoutScreenProps =
  {} & WorkoutStackScreenProps<WorkoutStack.WorkoutScreen>;

export type WorkoutScreenState = {
  selectedWorkout: Workout | null;
  currentExerciseId: string;
  workoutInProgress: boolean;
  workoutCompleted: boolean;
  workoutScore: number;
  exercises: Exercise[];
};

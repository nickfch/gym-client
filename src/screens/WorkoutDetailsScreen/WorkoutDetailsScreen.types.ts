import { Workout } from 'src/types';
import { WorkoutStack } from 'src/constants/navigation';
import { WorkoutStackScreenProps } from 'src/types/navigation.d';

export type WorkoutDetailsScreenProps = {
  workout: Workout;
  onSave: (workout: Workout) => void;
  onAddExercise: () => void;
  isEditable?: boolean;
} & WorkoutStackScreenProps<WorkoutStack.WorkoutDetailsScreen>;

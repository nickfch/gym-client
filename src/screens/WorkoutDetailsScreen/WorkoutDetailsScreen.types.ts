import { Workout } from 'src/types';

export type WorkoutDetailsScreenProps = {
  workout: Workout;
  onSave: (workout: Workout) => void;
  onAddExercise: () => void;
  isEditable?: boolean;
};

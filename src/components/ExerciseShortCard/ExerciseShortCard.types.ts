import { Exercise } from 'src/types/Workout.types';

export type ExerciseShortCardProps = {
  exercise: Exercise;
  isCurrent: boolean;
  onToggleComplete: (id: string) => void;
  isWorkoutInProgress: boolean;
};

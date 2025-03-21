import { Exercise } from 'src/types';

export type ExerciseItemProps = {
  exercise: Exercise;
  isCurrent: boolean;
  onToggleComplete: (id: string) => void;
  isWorkoutInProgress: boolean;
};

export type ExerciseListProps = {
  exercises: Exercise[];
  currentExerciseId: string;
  workoutInProgress: boolean;
  toggleCompletion: (id: string) => void;
};

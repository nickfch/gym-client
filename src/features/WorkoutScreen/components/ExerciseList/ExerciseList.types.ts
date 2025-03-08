export type Exercise = {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  notes?: string;
  completed: boolean;
  restTime: number;
};

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

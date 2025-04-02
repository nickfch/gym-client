export type WorkoutState = {
  completedExerciseIds: string[];
  completeExercise: (exerciseId: string) => void;
  clearCompletedExercises: () => void;
};

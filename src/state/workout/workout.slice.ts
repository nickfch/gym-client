import { create } from 'zustand';

import { WorkoutState } from './workout.slice.types';

export const useWorkoutStore = create<WorkoutState>((set) => ({
  completedExerciseIds: [] as string[],
  completeExercise: (exerciseId: string) => {
    set((state) => ({
      completedExerciseIds: [...state.completedExerciseIds, exerciseId],
    }));
  },
  clearCompletedExercises: () => {
    set({ completedExerciseIds: [] });
  },
}));

import { Exercise, WithUserMeta } from 'src/types';

export type ExerciseListProps = {
  exercises: WithUserMeta<Exercise>[];
  workoutInProgress: boolean;
  toggleCompletion: (id: string) => void;
  currentExerciseId: string;
};

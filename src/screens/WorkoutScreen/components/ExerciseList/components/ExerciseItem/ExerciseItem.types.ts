import { Exercise, WithUserMeta } from 'src/types';

export type ExerciseItemProps = {
  exercise: WithUserMeta<Exercise>;
  isCurrent: boolean;
  onToggleComplete: (id: string) => void;
  isWorkoutInProgress: boolean;
};

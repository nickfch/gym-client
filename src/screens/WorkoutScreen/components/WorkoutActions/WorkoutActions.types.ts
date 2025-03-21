export type WorkoutActionsProps = {
  workoutInProgress: boolean;
  workoutCompleted: boolean;
  onStart: () => void;
  onComplete: () => void;
  onNext: () => void;
  onRefresh: () => void;
};

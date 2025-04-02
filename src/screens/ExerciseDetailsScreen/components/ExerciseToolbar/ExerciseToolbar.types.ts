export type InteractionMetrics = {
  repsCompleted: number;
  totalReps: number;
  formQuality: 'Poor' | 'Fair' | 'Good' | 'Excellent';
  rangeOfMotion: number; // percentage
  tempo: 'Slow' | 'Regular' | 'Fast';
};

export type ExerciseToolbarProps = {
  timeRemaining: number;
  isActive: boolean;
  metrics: InteractionMetrics;
  onReset: () => void;
  onToggleTimer: () => void;
  onGoToNextExercise: () => void;
};

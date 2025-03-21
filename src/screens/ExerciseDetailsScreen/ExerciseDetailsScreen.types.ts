export type ExerciseData = {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  equipment: string[];
  description: string;
  steps: string[];
  tips: string[];
  mistakes: string[];
  videoUri: string;
  duration: number; // in seconds
};

export type InteractionMetrics = {
  repsCompleted: number;
  totalReps: number;
  formQuality: 'Poor' | 'Fair' | 'Good' | 'Excellent';
  rangeOfMotion: number; // percentage
  tempo: 'Slow' | 'Regular' | 'Fast';
};

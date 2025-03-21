export interface Exercise {
  id: string;
  name: string;
  category: string;
  sets: number;
  reps: number;
  completed: boolean;
  muscleGroup: string;
  difficulty?: number;
  description?: string;
  equipment?: string;
  weight?: number;
  notes?: string;
  restTime?: number;
}

export type WithUserSpecificInfo<T> = T & {
  difficulty?: number;
  description?: string;
  equipment?: string;
  weight?: number;
  notes?: string;
};

// Workout type
export interface Workout {
  id: string;
  name: string;
  duration: number;
  exercises: Exercise[];
  completed: boolean;
  description: string;
  difficulty: number;
}

// WeeklyProgress type
export interface WeeklyProgress {
  target: number;
  completed: number;
  streak: number;
  calories: number;
}

// DayPlan type
export interface DayPlan {
  exercises: Exercise[];
}

// WorkoutPlan type
export interface WorkoutPlan {
  name: string;
  days: { [key: string]: DayPlan };
}

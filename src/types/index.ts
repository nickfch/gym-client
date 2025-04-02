export * from './api-autogenerated';
export * from './common';

export type WithUserSpecificInfo<T> = T & {
  difficulty?: number;
  description?: string;
  equipment?: string;
  weight?: number;
  notes?: string;
};

// WeeklyProgress type
export interface WeeklyProgress {
  target: number;
  completed: number;
  streak: number;
  calories: number;
}

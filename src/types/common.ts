export type WithUserMeta<T> = {
  completed: boolean;
  weight: number;
  reps: number;
  notes: string;
} & T;

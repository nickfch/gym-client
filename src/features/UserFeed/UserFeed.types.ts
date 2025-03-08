export type Exercise = {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight?: number;
};

export type Workout = {
  id: string;
  name: string;
  date: Date;
  duration: number; // in minutes
  exercises: Exercise[];
  completed: boolean;
};

export type WeeklyProgress = {
  target: number; // target workouts per week
  completed: number; // completed workouts this week
  streak: number; // current workout streak
  calories: number; // calories burned this week
};

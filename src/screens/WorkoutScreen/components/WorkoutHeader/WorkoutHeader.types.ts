export type Workout = {
  name: string;
  category: string;
  description: string;
  difficulty: number;
  equipment: string;
};

export type WorkoutHeaderProps = {
  workout: Workout;
  inProgress: boolean;
  completed: boolean;
};

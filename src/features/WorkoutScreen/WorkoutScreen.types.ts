import { Exercise } from './components/ExerciseList/ExerciseList.types';
import { Workout } from './components/WorkoutHeader/WorkoutHeader.types';

export type WorkoutScreenProps = {
  navigation: any;
  route: any;
};

export type WorkoutScreenState = {
  selectedWorkout: Workout | null;
  currentExerciseId: string;
  workoutInProgress: boolean;
  workoutCompleted: boolean;
  workoutScore: number;
  exercises: Exercise[];
};

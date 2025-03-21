import { Exercise } from 'src/types';

export type ExerciseSelectionListProps = {
  exercises: Exercise[];
  onSelectExercise: (exercise: Exercise) => void;
  isLoading?: boolean;
  selectedCategory?: string;
  categories?: string[];
  onCategoryChange: (category: string) => void;
};

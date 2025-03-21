import { Exercise } from '../types';

export const mockExercises: Exercise[] = [
  // Chest
  {
    id: '1',
    name: 'Bench Press',
    category: 'Chest',
    equipment: 'Barbell',
    sets: 4,
    reps: 8,
    completed: false,
  },
  {
    id: '2',
    name: 'Incline Bench Press',
    category: 'Chest',
    equipment: 'Barbell',
    sets: 4,
    reps: 8,
    completed: false,
  },
  {
    id: '3',
    name: 'Chest Fly',
    category: 'Chest',
    equipment: 'Dumbbell',
    sets: 3,
    reps: 12,
    completed: false,
  },
  {
    id: '4',
    name: 'Push-up',
    category: 'Chest',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 15,
    completed: false,
  },
  {
    id: '5',
    name: 'Cable Crossover',
    category: 'Chest',
    equipment: 'Cable',
    sets: 3,
    reps: 12,
    completed: false,
  },
  // ...other exercises...
];

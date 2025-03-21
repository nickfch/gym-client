import { WeeklyProgress, Workout, Exercise } from 'src/types';

export const mockWeeklyProgress: WeeklyProgress = {
  target: 5,
  completed: 3,
  streak: 4,
  calories: 1250,
};

export const mockWorkouts: Workout[] = [
  {
    id: '1',
    name: 'Upper Body Strength',
    date: new Date(Date.now() + 1000 * 60 * 60 * 3), // 3 hours from now
    duration: 45,
    exercises: [
      {
        id: '1',
        name: 'Bench Press',
        sets: 4,
        reps: 8,
        weight: 70,
        completed: true,
      } as Exercise,
      {
        id: '2',
        name: 'Pull-ups',
        sets: 3,
        reps: 10,
        completed: false,
      } as Exercise,
      {
        id: '3',
        name: 'Shoulder Press',
        sets: 3,
        reps: 10,
        weight: 20,
        completed: false,
      } as Exercise,
    ],
    completed: false,
  },
  {
    id: '2',
    name: 'Leg Day',
    date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // 2 days from now
    duration: 60,
    exercises: [
      {
        id: '1',
        name: 'Squats',
        sets: 4,
        reps: 12,
        weight: 80,
        completed: false,
      } as Exercise,
      {
        id: '2',
        name: 'Lunges',
        sets: 3,
        reps: 10,
        weight: 15,
        completed: false,
      } as Exercise,
      {
        id: '3',
        name: 'Leg Press',
        sets: 3,
        reps: 12,
        weight: 120,
        completed: false,
      } as Exercise,
    ],
    completed: false,
  },
];

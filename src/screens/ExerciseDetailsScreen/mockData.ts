import {
  ExerciseData,
  InteractionMetrics,
} from './ExerciseDetailsScreen.types';

export const exerciseData: ExerciseData = {
  id: 'ex001',
  title: 'Dumbbell Shoulder Press',
  difficulty: 'Intermediate',
  category: 'Upper Body',
  equipment: ['Dumbbells'],
  description:
    'The dumbbell shoulder press targets your deltoid muscles while also engaging your triceps and upper chest. This compound movement is excellent for building upper body strength and stability.',
  steps: [
    'Sit on a bench with back support. Hold a dumbbell in each hand at shoulder height with palms facing forward.',
    'Exhale as you press the weights upward until your arms are fully extended overhead.',
    'At the top, the dumbbells should be directly above your shoulders with arms fully extended but not locked.',
    'Inhale as you slowly lower the weights back to the starting position at shoulder level.',
    'Complete the recommended number of repetitions while maintaining proper form.',
  ],
  tips: [
    'Keep your core engaged throughout the movement',
    'Maintain a neutral spine position',
    'Focus on controlled movements rather than speed',
  ],
  mistakes: [
    'Arching your back during the press',
    'Using momentum instead of controlled movement',
    'Letting the dumbbells drift forward or backward',
    'Fully locking out your elbows at the top',
  ],
  videoUri: 'https://example.com/exercises/dumbbell-shoulder-press.gif',
  duration: 60,
};

export const initialMetrics: InteractionMetrics = {
  repsCompleted: 0,
  totalReps: 12,
  formQuality: 'Good',
  rangeOfMotion: 90,
  tempo: 'Regular',
};

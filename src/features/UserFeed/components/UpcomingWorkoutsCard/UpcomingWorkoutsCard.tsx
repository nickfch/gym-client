import React from 'react';
import { FeedCard } from '../FeedCard';
import { CardHeader } from '../CardHeader';
import { WorkoutListItem } from '../WorkoutListItem';
import { Workout } from 'src/types';

interface UpcomingWorkoutsFeedProps {
  workouts: Workout[];
}

export const UpcomingWorkoutsFeed: React.FC<UpcomingWorkoutsFeedProps> = ({
  workouts,
}) => {
  const handleViewAllWorkouts = () => {
    // Navigate to all workouts screen
    console.log('Navigate to all workouts');
  };

  const handleWorkoutPress = (workoutId: string) => {
    // Navigate to workout details
    console.log('Navigate to workout details:', workoutId);
  };

  return (
    <FeedCard>
      <CardHeader
        title="Upcoming Workouts"
        actionText="See All"
        onAction={handleViewAllWorkouts}
      />

      {workouts.map((workout) => (
        <WorkoutListItem
          key={workout.id}
          workout={workout}
          onPress={handleWorkoutPress}
        />
      ))}
    </FeedCard>
  );
};

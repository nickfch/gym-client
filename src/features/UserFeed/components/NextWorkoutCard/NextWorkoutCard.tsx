import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FeedCard } from '../FeedCard';
import { CardHeader } from '../CardHeader';
import { ExerciseShortCard } from 'src/components/ExerciseShortCard';
import { formatDate } from 'src/utils/dateFormatters';
import { Workout } from 'src/types';
import { MainStack, WorkoutStack } from 'src/constants/navigation';

import { styles } from './NextWorkoutCard.styles';

interface NextWorkoutCardProps {
  workout: Workout;
}

export const NextWorkoutCard: React.FC<NextWorkoutCardProps> = ({
  workout,
}) => {
  const { navigate } = useNavigation();
  const handleViewDetails = () => {
    // Navigate to workout details
    console.log('View details for workout:', workout.id);
    navigate(MainStack.WorkoutStack, {
      screen: WorkoutStack.WorkoutDetailsScreen,
      workoutId: workout.id,
    });
  };

  const handleStartWorkout = () => {
    // Start the workout
    navigate(MainStack.WorkoutStack, {
      screen: WorkoutStack.WorkoutScreen,
      workoutId: workout.id,
    });
    console.log('Starting workout:', workout.id);
  };

  return (
    <FeedCard>
      <CardHeader
        title="Next Workout"
        actionText="Details"
        onAction={handleViewDetails}
      />

      <View style={styles.workoutContainer}>
        <View style={styles.workoutHeader}>
          <View style={styles.workoutTitleContainer}>
            <Text style={styles.workoutTitle}>{workout.name}</Text>
            <Text style={styles.workoutTime}>{formatDate(workout.date)}</Text>
          </View>
          <View style={styles.workoutDuration}>
            <Ionicons name="time-outline" size={16} color="#6B7280" />
            <Text style={styles.workoutDurationText}>
              {workout.duration} min
            </Text>
          </View>
        </View>

        <View style={styles.exercisesList}>
          {workout.exercises.map((exercise) => (
            <ExerciseShortCard
              key={exercise.id}
              exercise={exercise}
              isCurrent={false}
              isWorkoutInProgress={false}
              onToggleComplete={() =>
                console.log('Toggle complete for exercise:', exercise.id)
              }
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={handleStartWorkout}
        >
          <Text style={styles.startButtonText}>Start Workout</Text>
        </TouchableOpacity>
      </View>
    </FeedCard>
  );
};

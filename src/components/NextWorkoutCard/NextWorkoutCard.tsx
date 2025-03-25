import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { FeedCard } from 'src/components/FeedCard';
import { CardHeader } from 'src/components/CardHeader';
import { ExerciseShortCard } from 'src/components/ExerciseShortCard';
import { MainStack, WorkoutStack } from 'src/constants/navigation';
import { useStyles } from './NextWorkoutCard.styles';
import { NextWorkoutCardProps } from './NextWorkoutCard.types';
import { WorkoutStackScreenProps } from 'src/types/navigation.d';

export const NextWorkoutCard: React.FC<NextWorkoutCardProps> = ({
  workoutId,
  name,
  duration,
  exercises,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { navigate } =
    useNavigation<
      WorkoutStackScreenProps<WorkoutStack.WorkoutScreen>['navigation']
    >();

  const handleViewDetails = () => {
    navigate(MainStack.WorkoutStack, {
      screen: WorkoutStack.WorkoutDetailsScreen,
      params: {
        workoutId,
        name,
      },
    });
  };

  const handleStartWorkout = () => {
    navigate(MainStack.WorkoutStack, {
      screen: WorkoutStack.WorkoutScreen,
      params: {
        workoutId,
        name,
      },
    });
  };

  return (
    <FeedCard>
      <CardHeader
        title={t('next-workout-card--title')}
        actionText={t('next-workout-card--action-text')}
        onAction={handleViewDetails}
      />

      <View style={styles.workoutContainer}>
        <View style={styles.workoutHeader}>
          <View style={styles.workoutTitleContainer}>
            <Text style={styles.workoutTitle}>{name}</Text>
          </View>
          <View style={styles.workoutDuration}>
            <Ionicons name="time-outline" size={16} color="#6B7280" />
            <Text style={styles.workoutDurationText}>
              {t('next-workout-card--duration', { duration })}
            </Text>
          </View>
        </View>

        <View style={styles.exercisesList}>
          {exercises.map((exercise) => (
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
          <Text style={styles.startButtonText}>
            {t('next-workout-card--start-btn')}
          </Text>
        </TouchableOpacity>
      </View>
    </FeedCard>
  );
};

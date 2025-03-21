import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'expo-status-bar';
import { Progress } from 'src/components/Progress';
import { WeeklyProgressCard } from './components/WeeklyProgressCard';
import { NextWorkoutCard } from '../../components/NextWorkoutCard';
import { UpcomingWorkoutsFeed } from './components/UpcomingWorkoutsCard';
import { AchievementsCard } from './components/AchievementsCard';

import { styles } from './UserFeedScreen.styles';
import { WeeklyProgress } from './UserFeedScreen.types';
import { mockWeeklyProgress } from './mockData'; // Import mock data

import { useUserFeedLogic } from './UserFeedScreen.logic';

export const UserFeedScreen = () => {
  const { t } = useTranslation();
  const { normalizedData, nearestWorkoutId, uncompletedWorkoutIds, isLoading } =
    useUserFeedLogic();

  const [weeklyProgress, setWeeklyProgress] = useState<WeeklyProgress | null>(
    null,
  );

  useEffect(() => {
    // Simulate API fetch with a short delay
    const timer = setTimeout(() => {
      setWeeklyProgress(mockWeeklyProgress);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); // Add empty dependency array to ensure effect runs only once

  if (isLoading) {
    return <Progress />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {weeklyProgress && <WeeklyProgressCard progress={weeklyProgress} />}
        {nearestWorkoutId && (
          <NextWorkoutCard
            workoutId={normalizedData.data[nearestWorkoutId].documentId!}
            name={normalizedData.data[nearestWorkoutId].workout.name}
            duration={normalizedData.data[nearestWorkoutId].workout.duration}
            exercises={normalizedData.data[nearestWorkoutId].workout.exercises}
          />
        )}

        {uncompletedWorkoutIds.length > 0 ? (
          <UpcomingWorkoutsFeed
            workouts={uncompletedWorkoutIds.map(
              (workoutId) => normalizedData.data[workoutId],
            )}
          />
        ) : (
          <Text>{t('user-feed--no-scheduled-workouts-label')}</Text>
        )}

        <AchievementsCard />
      </ScrollView>
    </SafeAreaView>
  );
};

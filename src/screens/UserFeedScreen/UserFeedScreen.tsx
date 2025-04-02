import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Progress } from 'src/components/Progress';
import { WeeklyProgressCard } from './components/WeeklyProgressCard';
import { NextWorkoutCard } from '../../components/NextWorkoutCard';
import { UpcomingWorkoutsFeed } from './components/UpcomingWorkoutsCard';
import { AchievementsCard } from './components/AchievementsCard';
import { EmptyWorkoutsCard } from './components/EmptyWorkoutsCard';
import { useStyles } from './UserFeedScreen.styles';
import { WeeklyProgress } from './UserFeedScreen.types';
import { mockWeeklyProgress } from './mockData'; // Import mock data
import { useUserFeedLogic } from './UserFeedScreen.logic';

export const UserFeedScreen = () => {
  const styles = useStyles();
  const {
    normalizedData,
    nearestWorkoutId,
    isLoading,
    uncompletedWorkouts,
    completedWorkoutIds,
  } = useUserFeedLogic();

  const [weeklyProgress, setWeeklyProgress] = useState<WeeklyProgress | null>(
    null,
  );

  // TODO: Need to figure-out how to calculate weekly progress.
  // Maybe move to backend. BFF Layer?
  useEffect(() => {
    // Simulate API fetch with a short delay
    const timer = setTimeout(() => {
      setWeeklyProgress({
        ...mockWeeklyProgress,
        completed: completedWorkoutIds.length,
        target: normalizedData.items.length,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [completedWorkoutIds, normalizedData]); // Add empty dependency array to ensure effect runs only once

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
        {uncompletedWorkouts.length > 0 ? (
          <UpcomingWorkoutsFeed workouts={uncompletedWorkouts} />
        ) : (
          <EmptyWorkoutsCard />
        )}
        <AchievementsCard />
      </ScrollView>
    </SafeAreaView>
  );
};

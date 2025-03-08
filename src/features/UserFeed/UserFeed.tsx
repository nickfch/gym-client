import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import { Workout } from 'src/types';

// Import components
import { Header } from './components/Header';
import { WeeklyProgressCard } from './components/WeeklyProgressCard';
import { NextWorkoutCard } from './components/NextWorkoutCard';
import { UpcomingWorkoutsFeed } from './components/UpcomingWorkoutsCard';
import { AchievementsCard } from './components/AchievementsCard';

import { styles } from './UserFeed.styles';
import { WeeklyProgress } from './UserFeed.types';

// Mock data
const mockWeeklyProgress: WeeklyProgress = {
  target: 5,
  completed: 3,
  streak: 4,
  calories: 1250,
};

const mockWorkouts: Workout[] = [
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
      },
      { id: '2', name: 'Pull-ups', sets: 3, reps: 10, completed: false },
      {
        id: '3',
        name: 'Shoulder Press',
        sets: 3,
        reps: 10,
        weight: 20,
        completed: false,
      },
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
      },
      {
        id: '2',
        name: 'Lunges',
        sets: 3,
        reps: 10,
        weight: 15,
        completed: false,
      },
      {
        id: '3',
        name: 'Leg Press',
        sets: 3,
        reps: 12,
        weight: 120,
        completed: false,
      },
    ],
    completed: false,
  },
];

export const UserFeed = () => {
  const [loading, setLoading] = useState(true);
  const [weeklyProgress, setWeeklyProgress] = useState<WeeklyProgress | null>(
    null,
  );
  const [nextWorkout, setNextWorkout] = useState<Workout | null>(null);
  const [upcomingWorkouts, setUpcomingWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    // Simulate API fetch with a short delay
    const timer = setTimeout(() => {
      setWeeklyProgress(mockWeeklyProgress);
      setNextWorkout(mockWorkouts[0]);
      setUpcomingWorkouts(mockWorkouts);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4F46E5" />
        <Text style={styles.loadingText}>Loading your fitness data...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {weeklyProgress && <WeeklyProgressCard progress={weeklyProgress} />}
        {nextWorkout && <NextWorkoutCard workout={nextWorkout} />}

        <UpcomingWorkoutsFeed workouts={upcomingWorkouts} />

        <AchievementsCard />
      </ScrollView>
    </SafeAreaView>
  );
};

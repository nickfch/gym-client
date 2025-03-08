import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FeedCard } from '../FeedCard';
import { CardHeader } from '../CardHeader';

import { styles } from './AchievementsCard.styles';

export const AchievementsCard: React.FC = () => {
  return (
    <FeedCard style={styles.achievementsCard}>
      <CardHeader title="Latest Achievements" />
      <View style={styles.achievementsContainer}>
        <View style={styles.achievementItem}>
          <View style={styles.achievementIcon}>
            <Ionicons name="trophy-outline" size={24} color="#FBBF24" />
          </View>
          <Text style={styles.achievementText}>Completed 10 Workouts</Text>
        </View>
        <View style={styles.achievementItem}>
          <View style={styles.achievementIcon}>
            <Ionicons name="flame-outline" size={24} color="#EF4444" />
          </View>
          <Text style={styles.achievementText}>3-Day Streak</Text>
        </View>
      </View>
    </FeedCard>
  );
};

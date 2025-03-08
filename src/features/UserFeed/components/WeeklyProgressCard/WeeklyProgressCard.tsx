import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { WeeklyProgress } from 'src/types';
import { FeedCard } from '../FeedCard';
import { CardHeader } from '../CardHeader';

import { styles } from './WeeklyProgressCard.styles';

interface WeeklyProgressCardProps {
  progress: WeeklyProgress;
}

export const WeeklyProgressCard: React.FC<WeeklyProgressCardProps> = ({
  progress,
}) => {
  return (
    <FeedCard>
      <CardHeader title="Weekly Progress" />
      <View style={styles.progressContainer}>
        <View style={styles.progressItem}>
          <View style={styles.progressCircle}>
            <Text style={styles.progressNumber}>{progress.completed}</Text>
            <Text style={styles.progressLabel}>/{progress.target}</Text>
          </View>
          <Text style={styles.progressText}>Workouts</Text>
        </View>

        <View style={styles.progressItem}>
          <View style={styles.progressCircle}>
            <Text style={styles.progressNumber}>{progress.streak}</Text>
          </View>
          <Text style={styles.progressText}>Streak</Text>
        </View>

        <View style={styles.progressItem}>
          <View style={styles.progressCircle}>
            <Text style={styles.progressNumber}>{progress.calories}</Text>
          </View>
          <Text style={styles.progressText}>Calories</Text>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${(progress.completed / progress.target) * 100}%` },
          ]}
        />
      </View>
      <Text style={styles.progressBarLabel}>
        {progress.completed} of {progress.target} workouts completed
      </Text>
    </FeedCard>
  );
};

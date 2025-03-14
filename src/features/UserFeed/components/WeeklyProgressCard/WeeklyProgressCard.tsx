import React from 'react';
import { View, Text } from 'react-native';

import { WeeklyProgress } from 'src/types';
import { CardHeader } from 'src/components/CardHeader';
import { ProgressBar } from 'src/components/ProgressBar';
import { FeedCard } from 'src/components/FeedCard';

import { ProgressItem } from './components/ProgressItem';

import { styles } from './WeeklyProgressCard.styles';

type WeeklyProgressCardProps = {
  progress: WeeklyProgress;
};

export const WeeklyProgressCard: React.FC<WeeklyProgressCardProps> = ({
  progress,
}) => {
  return (
    <FeedCard>
      <CardHeader title="Weekly Progress" />
      <View style={styles.progressContainer}>
        <ProgressItem name="Workouts">
          <Text style={styles.progressNumber}>{progress.completed}</Text>
          <Text style={styles.progressLabel}>/{progress.target}</Text>
        </ProgressItem>
        <ProgressItem name="Streak">
          <Text style={styles.progressNumber}>{progress.streak}</Text>
        </ProgressItem>
        <ProgressItem name="Calories">
          <Text style={styles.progressNumber}>{progress.calories}</Text>
        </ProgressItem>
      </View>
      <ProgressBar
        progress={progress.completed / progress.target}
        label={`${progress.completed} of ${progress.target}`}
      />
    </FeedCard>
  );
};

import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { CardHeader } from 'src/components/CardHeader';
import { ProgressBar } from 'src/components/ProgressBar';
import { FeedCard } from 'src/components/FeedCard';
import { ProgressItem } from './components/ProgressItem';
import { WeeklyProgressCardProps } from './WeeklyProgressCard.types';
import { styles } from './WeeklyProgressCard.styles';

export const WeeklyProgressCard: React.FC<WeeklyProgressCardProps> = ({
  progress,
}) => {
  const { t } = useTranslation();

  return (
    <FeedCard>
      <CardHeader title={t('weekly-progress-card--title')} />
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
        label={t('weekly-progress-card--label', {
          completed: progress.completed,
          targetGoal: progress.target,
        })}
      />
    </FeedCard>
  );
};

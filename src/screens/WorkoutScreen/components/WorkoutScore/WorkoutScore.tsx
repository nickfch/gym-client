import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './WorkoutScore.styles';
import { WorkoutScoreProps } from './WorkoutScore.types';

export const WorkoutScore: React.FC<WorkoutScoreProps> = ({
  score,
  completed,
}) => {
  if (!completed) return null;

  let scoreText = 'Keep Going!';
  let scoreColor = '#FF9800';

  if (score >= 90) {
    scoreText = 'Excellent!';
    scoreColor = '#4CAF50';
  } else if (score >= 70) {
    scoreText = 'Great Job!';
    scoreColor = '#8BC34A';
  } else if (score >= 50) {
    scoreText = 'Good Work!';
    scoreColor = '#CDDC39';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Score</Text>
      <View style={styles.scoreContainer}>
        <Text style={[styles.score, { color: scoreColor }]}>{score}</Text>
        <Text style={styles.maxScore}>/100</Text>
      </View>
      <Text style={[styles.feedback, { color: scoreColor }]}>{scoreText}</Text>
    </View>
  );
};

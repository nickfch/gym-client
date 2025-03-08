import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { styles } from './WorkoutHeader.styles';
import { WorkoutHeaderProps } from './WorkoutHeader.types';

export const WorkoutHeader: React.FC<WorkoutHeaderProps> = ({
  workout,
  inProgress,
  completed,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.name}</Text>
      <Text style={styles.category}>{workout.category}</Text>
      <Text style={styles.description}>{workout.description}</Text>

      <View style={styles.detailsRow}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Difficulty</Text>
          <Text style={styles.detailValue}>
            {'⭐'.repeat(workout.difficulty)}
          </Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Equipment</Text>
          <Text style={styles.detailValue}>{workout.equipment}</Text>
        </View>
      </View>

      {inProgress && (
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>In Progress</Text>
        </View>
      )}

      {completed && (
        <View style={[styles.statusBadge, styles.completedBadge]}>
          <Text style={styles.statusText}>Completed</Text>
        </View>
      )}
    </View>
  );
};

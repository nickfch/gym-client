import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { formatDate } from 'src/utils/dateFormatters';
import { Workout } from 'src/types';

import { styles } from './WorkoutListItem.styles';

interface WorkoutListItemProps {
  workout: Workout;
  onPress: (workoutId: string) => void;
}

export const WorkoutListItem: React.FC<WorkoutListItemProps> = ({
  workout,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.feedItem}
      onPress={() => onPress(workout.id)}
    >
      <View style={styles.feedItemContent}>
        <View style={styles.feedItemIcon}>
          <Ionicons name="barbell-outline" size={24} color="#4F46E5" />
        </View>
        <View style={styles.feedItemDetails}>
          <Text style={styles.feedItemTitle}>{workout.name}</Text>
          <Text style={styles.feedItemSubtitle}>
            {formatDate(workout.date)}
          </Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
};

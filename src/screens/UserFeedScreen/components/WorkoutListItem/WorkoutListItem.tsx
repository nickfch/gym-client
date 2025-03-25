import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@rneui/themed';
import { formatDate } from 'src/utils/dateFormatters';
import { useStyles } from './WorkoutListItem.styles';
import { WorkoutListItemProps } from './WorkoutListItem.types';

export const WorkoutListItem: React.FC<WorkoutListItemProps> = ({
  workout,
  onPress,
}) => {
  const { theme } = useTheme();
  const styles = useStyles();

  return (
    <TouchableOpacity
      style={styles.feedItem}
      onPress={() => onPress(workout.documentId!)}
    >
      <View style={styles.feedItemContent}>
        <View style={styles.feedItemIcon}>
          <Ionicons
            name="barbell-outline"
            size={24}
            color={theme.colors.primary}
          />
        </View>
        <View style={styles.feedItemDetails}>
          <Text style={styles.feedItemTitle}>{workout.workout.name}</Text>
          {workout.date && (
            <Text style={styles.feedItemSubtitle}>
              {formatDate(new Date(workout.date))}
            </Text>
          )}
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color={theme.colors.grey5} />
    </TouchableOpacity>
  );
};

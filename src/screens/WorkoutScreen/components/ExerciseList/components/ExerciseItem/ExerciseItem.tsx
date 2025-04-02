import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import { useWorkoutStore } from 'src/state';
import { useStyles } from './ExerciseItem.styles';
import { ExerciseItemProps } from './ExerciseItem.types';

export const ExerciseItem: React.FC<ExerciseItemProps> = ({
  isCurrent,
  exercise,
  onToggleComplete,
  isWorkoutInProgress,
}) => {
  const styles = useStyles();
  const { completedExerciseIds } = useWorkoutStore();
  const isCompleted = completedExerciseIds.includes(exercise.documentId!);
  const { theme } = useTheme();
  return (
    <View
      style={[
        styles.exerciseItem,
        isCurrent && styles.currentExercise,
        isCompleted && styles.completedExercise,
      ]}
    >
      <View style={styles.exerciseInfo}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseDetails}>
          {exercise.sets} sets x {exercise.reps} reps
          {exercise.weight && exercise.weight > 0
            ? ` @ ${exercise.weight} lbs`
            : ''}
        </Text>
        {exercise.notes ? (
          <Text style={styles.exerciseNotes}>{exercise.notes}</Text>
        ) : null}
      </View>

      {isWorkoutInProgress && (
        <TouchableOpacity
          style={styles.completeButton}
          onPress={() => onToggleComplete(exercise.documentId!)}
        >
          <Ionicons
            name={isCompleted ? 'checkmark-circle' : 'checkmark-circle-outline'}
            size={28}
            color={isCompleted ? theme.colors.success : theme.colors.grey3}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

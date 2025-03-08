import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './ExerciseShortCard.styles';
import { ExerciseShortCardProps } from './ExerciseShortCard.types';

export const ExerciseShortCard: React.FC<ExerciseShortCardProps> = ({
  exercise,
  isCurrent,
  onToggleComplete,
  isWorkoutInProgress,
}) => {
  return (
    <View
      style={[
        styles.exerciseItem,
        isCurrent && styles.currentExercise,
        exercise.completed && styles.completedExercise,
      ]}
    >
      <View style={styles.exerciseInfo}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseDetails}>
          {exercise.sets} sets x {exercise.reps} reps
          {exercise?.weight ?? 0 > 0 ? ` @ ${exercise.weight} lbs` : ''}
        </Text>
        {exercise.notes ? (
          <Text style={styles.exerciseNotes}>{exercise.notes}</Text>
        ) : null}
      </View>

      {isWorkoutInProgress && (
        <TouchableOpacity
          style={styles.completeButton}
          onPress={() => onToggleComplete(exercise.id)}
        >
          <Ionicons
            name={
              exercise.completed
                ? 'checkmark-circle'
                : 'checkmark-circle-outline'
            }
            size={28}
            color={exercise.completed ? '#4CAF50' : '#aaa'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

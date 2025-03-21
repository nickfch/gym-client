import { memo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Exercise } from 'src/types';

import { styles } from './WorkoutDetailsExercise.styles';

type WorkoutDetailsExerciseProps = {
  exercise: Exercise;
  isEditing: boolean;
  handleEditExercise: (exercise: Exercise) => void;
  handleRemoveExercise: (exerciseId: string) => void;
};

export const WorkoutDetailsExercise = memo<WorkoutDetailsExerciseProps>(
  ({ isEditing, exercise, handleEditExercise, handleRemoveExercise }) => {
    return (
      <View key={exercise.id} style={styles.exerciseItem}>
        <View style={styles.exerciseHeader}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          <Text style={styles.exerciseMuscleGroup}>{exercise.muscleGroup}</Text>
        </View>

        <View style={styles.exerciseDetails}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Sets</Text>
            <Text style={styles.detailValue}>{exercise.sets}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Reps</Text>
            <Text style={styles.detailValue}>{exercise.reps}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Weight</Text>
            <Text style={styles.detailValue}>{exercise.weight}</Text>
          </View>
        </View>

        {exercise.notes ? (
          <Text style={styles.exerciseNotes}>Notes: {exercise.notes}</Text>
        ) : null}

        {isEditing && (
          <View style={styles.exerciseActions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleEditExercise(exercise)}
            >
              <Ionicons name="pencil" size={18} color="#0066cc" />
              <Text style={styles.actionButtonText}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, styles.removeButton]}
              onPress={() => handleRemoveExercise(exercise.id)}
            >
              <Ionicons name="trash" size={18} color="#ff3b30" />
              <Text style={[styles.actionButtonText, styles.removeButtonText]}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  },
);

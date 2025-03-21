import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo/vector-icons

import { useBinaryState } from 'src/hooks/useBinaryState';
import { Exercise, Workout, WithUserSpecificInfo } from 'src/types';
import { styles } from './WorkoutDetailsScreen.styles';
import { WorkoutDetailsScreenProps } from './WorkoutDetailsScreen.types';
import { WorkoutDetailsExercise } from './components/WorkoutDetailsExercise';
import { mockWorkout } from './mockWorkout';

const mockData: Workout = mockWorkout;

export const WorkoutDetailsScreen: React.FC<WorkoutDetailsScreenProps> = ({
  workout: initialWorkout = mockData,
  onSave,
  onAddExercise,
  isEditable = true,
}) => {
  const [workout, setWorkout] =
    useState<WithUserSpecificInfo<Workout>>(initialWorkout);
  const {
    value: isEditing,
    turnOff: onTurnOffEditMode,
    turnOn: onTurnOnEditMode,
  } = useBinaryState();
  const [editingExercise, setEditingExercise] =
    useState<WithUserSpecificInfo<Exercise> | null>(null);
  const { value: showExerciseModal, toggle: onToggleExerciseModal } =
    useBinaryState();

  // Handle saving the workout
  const handleSave = () => {
    if (onSave) {
      onSave(workout);
    }
    onTurnOffEditMode();
  };

  // Handle removing an exercise
  const handleRemoveExercise = (exerciseId: string) => {
    Alert.alert(
      'Remove Exercise',
      'Are you sure you want to remove this exercise?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            const updatedExercises = workout.exercises.filter(
              (exercise) => exercise.id !== exerciseId,
            );
            setWorkout({ ...workout, exercises: updatedExercises });
          },
        },
      ],
    );
  };

  // Handle opening the edit exercise modal
  const handleEditExercise = (exercise: WithUserSpecificInfo<Exercise>) => {
    setEditingExercise({ ...exercise });
    onToggleExerciseModal();
  };

  // Handle saving exercise changes
  const handleSaveExercise = () => {
    if (editingExercise) {
      const updatedExercises = workout.exercises.map((exercise) =>
        exercise.id === editingExercise.id ? editingExercise : exercise,
      );

      setWorkout({ ...workout, exercises: updatedExercises });
      onToggleExerciseModal();
      setEditingExercise(null);
    }
  };

  // Render exercise edit modal
  const renderExerciseEditModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showExerciseModal}
      onRequestClose={onToggleExerciseModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Edit Exercise</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Sets</Text>
            <TextInput
              style={styles.input}
              value={editingExercise?.sets?.toString() || ''}
              onChangeText={(text) => {
                if (!editingExercise) return;

                setEditingExercise({
                  ...editingExercise,
                  sets: parseInt(text) ?? 0,
                });
              }}
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Reps</Text>
            <TextInput
              style={styles.input}
              value={editingExercise?.reps?.toString() || ''}
              onChangeText={(text) => {
                if (!editingExercise) return;

                setEditingExercise({
                  ...editingExercise,
                  reps: parseInt(text) || 0,
                });
              }}
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Weight</Text>
            <TextInput
              style={styles.input}
              value={editingExercise?.weight?.toString() || ''}
              onChangeText={(text) => {
                if (!editingExercise) return;

                setEditingExercise({
                  ...editingExercise,
                  weight: parseInt(text),
                });
              }}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Notes</Text>
            <TextInput
              style={[styles.input, styles.notesInput]}
              value={editingExercise?.notes || ''}
              onChangeText={(text) => {
                if (!editingExercise) return;
                setEditingExercise({ ...editingExercise, notes: text });
              }}
              multiline
            />
          </View>

          <View style={styles.modalActions}>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={onToggleExerciseModal}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, styles.saveButton]}
              onPress={handleSaveExercise}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.workoutName}>{workout.name}</Text>
          <View style={styles.workoutMetaInfo}>
            <Text style={styles.metaInfoText}>{workout.difficulty}</Text>
            <Text style={styles.metaDot}>•</Text>
            <Text style={styles.metaInfoText}>{workout.duration}</Text>
          </View>
        </View>

        {isEditable && (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => (isEditing ? handleSave() : onTurnOnEditMode())}
          >
            <Text style={styles.editButtonText}>
              {isEditing ? 'Save' : 'Edit'}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Description */}
      <Text style={styles.description}>{workout.description}</Text>

      {/* Exercises Section */}
      <View style={styles.exercisesSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exercises</Text>
          {isEditing && (
            <TouchableOpacity style={styles.addButton} onPress={onAddExercise}>
              <Ionicons name="add-circle" size={20} color="#0066cc" />
              <Text style={styles.addButtonText}>Add Exercise</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Exercise List */}
        <ScrollView style={styles.exerciseList}>
          {workout.exercises.map((exerciseItem) => (
            <WorkoutDetailsExercise
              key={exerciseItem.id}
              isEditing={isEditing}
              exercise={exerciseItem}
              handleEditExercise={handleEditExercise}
              handleRemoveExercise={handleRemoveExercise}
            />
          ))}
        </ScrollView>
      </View>

      {/* Edit Exercise Modal */}
      {renderExerciseEditModal()}
    </View>
  );
};

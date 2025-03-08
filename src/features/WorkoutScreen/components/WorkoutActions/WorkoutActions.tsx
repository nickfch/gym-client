import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './WorkoutActions.styles';
import { WorkoutActionsProps } from './WorkoutActions.types';

export const WorkoutActions: React.FC<WorkoutActionsProps> = ({
  workoutInProgress,
  workoutCompleted,
  onStart,
  onComplete,
  onNext,
  onRefresh,
}) => {
  return (
    <View style={styles.container}>
      {!workoutInProgress && !workoutCompleted && (
        <TouchableOpacity style={styles.startButton} onPress={onStart}>
          <Ionicons name="play" size={20} color="white" />
          <Text style={styles.buttonText}>Start Workout</Text>
        </TouchableOpacity>
      )}

      {workoutInProgress && (
        <View style={styles.rowButtons}>
          <TouchableOpacity style={styles.nextButton} onPress={onNext}>
            <Ionicons name="arrow-forward" size={20} color="white" />
            <Text style={styles.buttonText}>Next Exercise</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.completeButton} onPress={onComplete}>
            <Ionicons name="checkmark-done" size={20} color="white" />
            <Text style={styles.buttonText}>Complete Workout</Text>
          </TouchableOpacity>
        </View>
      )}

      {workoutCompleted && (
        <TouchableOpacity style={styles.newWorkoutButton} onPress={onStart}>
          <Ionicons name="refresh" size={20} color="white" />
          <Text style={styles.buttonText}>Start New Workout</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.refreshButton} onPress={onRefresh}>
        <Ionicons name="sync" size={16} color="#666" />
        <Text style={styles.refreshText}>Refresh Workouts</Text>
      </TouchableOpacity>
    </View>
  );
};

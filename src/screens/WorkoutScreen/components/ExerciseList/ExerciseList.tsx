import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { MainStack, ExerciseStack } from 'src/constants/navigation';
import { styles } from './ExerciseList.styles';
import { ExerciseItemProps, ExerciseListProps } from './ExerciseList.types';

const ExerciseItem: React.FC<ExerciseItemProps> = ({
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

export const ExerciseList: React.FC<ExerciseListProps> = ({
  exercises,
  currentExerciseId,
  workoutInProgress,
  toggleCompletion,
}) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Exercises</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigate(MainStack.ExerciseStack, {
                screen: ExerciseStack.ExerciseDetailsScreen,
                exerciseId: item.id,
              });
            }}
          >
            <ExerciseItem
              exercise={item}
              isCurrent={item.id === currentExerciseId}
              onToggleComplete={toggleCompletion}
              isWorkoutInProgress={workoutInProgress}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

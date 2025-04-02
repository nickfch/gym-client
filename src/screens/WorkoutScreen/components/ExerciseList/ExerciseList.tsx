import React, { useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MainStack, ExerciseStack } from 'src/constants/navigation';
import { styles } from './ExerciseList.styles';
import { ExerciseListProps } from './ExerciseList.types';
import { ExerciseItem } from './components/ExerciseItem';

export const ExerciseList: React.FC<ExerciseListProps> = ({
  exercises,
  workoutInProgress,
  toggleCompletion,
  currentExerciseId,
}) => {
  const { navigate } = useNavigation();
  const navigateToCurrentExercise = useCallback(
    (exerciseId: string) => {
      navigate(MainStack.ExerciseStack, {
        screen: ExerciseStack.ExerciseDetailsScreen,
        params: {
          exerciseId,
        },
      });
    },
    [navigate],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Exercises</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.documentId!}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              if (!item.documentId) return;

              navigateToCurrentExercise(item.documentId);
            }}
          >
            <ExerciseItem
              exercise={item}
              onToggleComplete={toggleCompletion}
              isWorkoutInProgress={workoutInProgress}
              isCurrent={item.documentId === currentExerciseId}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

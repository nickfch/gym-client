import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGetAvailableWorkouts } from 'src/requests/hooks/useGetAvailableWorkouts';
import { MainStack, WorkoutStack } from 'src/constants/navigation';
import { Progress } from 'src/components/Progress';
import { WorkoutsList } from './components/WorkoutsList';

export const PlanningScreen: React.FC = () => {
  const { data, isLoading } = useGetAvailableWorkouts();
  const { navigate } = useNavigation();

  const navigateToWorkout = useCallback(
    (workoutId: string) => {
      navigate(MainStack.WorkoutStack, {
        screen: WorkoutStack.WorkoutScreen,
        params: { workoutId },
      });
    },
    [navigate],
  );

  return isLoading ? (
    <Progress />
  ) : (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Workouts</Text>
      {data?.data && (
        <WorkoutsList
          workouts={data.data}
          onSelectWorkout={navigateToWorkout}
        />
      )}
    </View>
  );
};

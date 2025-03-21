import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WorkoutStack } from 'src/constants/navigation';
import { WorkoutScreen } from 'src/screens/WorkoutScreen';
import { WorkoutDetailsScreen } from 'src/screens/WorkoutDetailsScreen';
import { WorkoutPlanningScreen } from 'src/screens/WorkoutPlanningScreen';

import { WorkoutStackParamList } from './WorkoutStack.types';

const Stack = createNativeStackNavigator<WorkoutStackParamList>();

export const WorkoutStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={WorkoutStack.WorkoutScreen}
        component={WorkoutScreen}
      />
      <Stack.Screen
        name={WorkoutStack.WorkoutDetailsScreen}
        component={WorkoutDetailsScreen}
      />
      <Stack.Screen
        name={WorkoutStack.PlanWorkoutScreen}
        component={WorkoutPlanningScreen}
      />
    </Stack.Navigator>
  );
};

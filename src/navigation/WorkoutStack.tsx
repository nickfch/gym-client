import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WorkoutStack } from 'src/constants/navigation';
import { WorkoutScreen } from 'src/features/WorkoutScreen';
import { WorkoutDetailsScreen } from 'src/features/WorkoutDetails';
import { WorkoutPlanningScreen } from 'src/features/WorkoutPlanning';

const Stack = createNativeStackNavigator();

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

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WorkoutStack } from 'src/constants/navigation';
import { WorkoutScreen } from 'src/screens/WorkoutScreen';
import { WorkoutDetailsScreen } from 'src/screens/WorkoutDetailsScreen';
import { WorkoutPlanningScreen } from 'src/screens/WorkoutPlanningScreen';
import { PlanningScreen } from 'src/screens/PlanningScreen';
import { WorkoutStackParamList } from 'src/types/navigation.d';

const Stack = createNativeStackNavigator<WorkoutStackParamList>();

export const WorkoutStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={WorkoutStack.WorkoutScreen}
        component={WorkoutScreen}
        options={({
          route: {
            params: { name },
          },
        }) => ({
          title: name,
        })}
      />
      <Stack.Screen
        name={WorkoutStack.WorkoutDetailsScreen}
        component={WorkoutDetailsScreen}
        options={({
          route: {
            params: { name },
          },
        }) => ({
          title: name,
        })}
      />
      <Stack.Screen
        name={WorkoutStack.PlanWorkoutScreen}
        component={WorkoutPlanningScreen}
      />
      <Stack.Screen
        name={WorkoutStack.PlanWeeklyWorkoutsScreen}
        component={PlanningScreen}
      />
    </Stack.Navigator>
  );
};

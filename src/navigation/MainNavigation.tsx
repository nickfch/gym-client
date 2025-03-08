import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainStack } from 'src/constants/navigation';

import { MainBottomNavigation } from './MainBottomNavigation';
import { WorkoutStackNavigation } from './WorkoutStack';
import { ExerciseNavigation } from './ExerciseNavigation';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={MainStack.MainBottomTab}>
      <Stack.Screen
        name={MainStack.MainBottomTab}
        component={MainBottomNavigation}
      />
      <Stack.Screen
        name={MainStack.WorkoutStack}
        component={WorkoutStackNavigation}
      />
      <Stack.Screen
        name={MainStack.ExerciseStack}
        component={ExerciseNavigation}
      />
    </Stack.Navigator>
  );
};

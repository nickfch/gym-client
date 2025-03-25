import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStack } from 'src/constants/navigation';
import { RootStackParamList } from 'src/types/navigation.d';
import { MainBottomNavigation } from './MainBottomNavigation';
import { WorkoutStackNavigation } from './WorkoutStack';
import { ExerciseNavigation } from './ExerciseNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={MainStack.MainBottomTab}>
      <Stack.Screen
        name={MainStack.MainBottomTab}
        component={MainBottomNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MainStack.WorkoutStack}
        component={WorkoutStackNavigation}
        options={{ headerShown: true, title: '' }}
      />
      <Stack.Screen
        name={MainStack.ExerciseStack}
        component={ExerciseNavigation}
        options={{ headerShown: true, title: '' }}
      />
    </Stack.Navigator>
  );
};

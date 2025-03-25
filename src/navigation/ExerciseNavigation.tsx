import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ExerciseStack } from 'src/constants/navigation';

import { ExerciseDetailsScreen } from 'src/screens/ExerciseDetailsScreen';

const Stack = createNativeStackNavigator();

export const ExerciseNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ExerciseStack.ExerciseDetailsScreen}
        component={ExerciseDetailsScreen}
      />
    </Stack.Navigator>
  );
};

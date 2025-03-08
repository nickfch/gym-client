import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ExerciseStack } from 'src/constants/navigation';

import { ExerciseDetailsScreen } from 'src/features/ExerciseDetails';

const Stack = createNativeStackNavigator();

export const ExerciseNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ExerciseStack.ExerciseDetailsScreen}
        component={ExerciseDetailsScreen}
      />
    </Stack.Navigator>
  );
};

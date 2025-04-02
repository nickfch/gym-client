import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStack } from 'src/constants/navigation';
import { SignInScreen } from 'src/screens/SignInScreen';
import { SignUpScreen } from 'src/screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export const AuthStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthStack.SignInScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={AuthStack.SignInScreen} component={SignInScreen} />
      <Stack.Screen name={AuthStack.SignUpScreen} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

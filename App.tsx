import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from 'src/navigation/MainNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

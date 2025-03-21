import './i18next';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from 'src/navigation/MainNavigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

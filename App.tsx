import './i18next';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from 'src/navigation/MainNavigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@rneui/themed';

import { theme } from './src/constants/theme';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <MainNavigation />
          <StatusBar style="auto" />
        </ThemeProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

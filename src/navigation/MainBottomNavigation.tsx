import { useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome6 } from '@expo/vector-icons';
import { useTheme } from '@rneui/themed';

import { protectAuthComponent } from 'src/components/WithAuthProtection';
import { MainBottomTab } from 'src/constants/navigation';
import { UserFeedScreen } from 'src/screens/UserFeedScreen';
import { ProfileScreen } from 'src/screens/ProfileScreen';

import { LeftDrawer } from './MainDrawer';

const TabNavigator = createBottomTabNavigator();

export const MainBottomNavigation = () => {
  const { theme } = useTheme();
  const screenOptions = useMemo(
    () => ({
      headerShown: false,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.black,
    }),
    [theme],
  );

  return (
    <TabNavigator.Navigator
      initialRouteName={MainBottomTab.HomeScreen}
      screenOptions={screenOptions}
    >
      <TabNavigator.Screen
        name={MainBottomTab.HomeScreen}
        component={protectAuthComponent(UserFeedScreen)}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <TabNavigator.Screen
        name={MainBottomTab.ProfileScreen}
        component={protectAuthComponent(ProfileScreen)}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-circle" size={24} color={color} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="All"
        component={LeftDrawer}
        options={{ title: 'All' }}
      />
    </TabNavigator.Navigator>
  );
};

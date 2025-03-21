import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome6 } from '@expo/vector-icons';

import { MainBottomTab } from 'src/constants/navigation';
import { UserFeedScreen } from 'src/screens/UserFeedScreen';
import { ProfileScreen } from 'src/screens/ProfileScreen';

import { LeftDrawer } from './MainDrawer';

const TabNavigator = createBottomTabNavigator();

const ACTIVE_COLOR = 'red';
const DEFAULT_COLOR = 'black';
const baseScreenOptions = {
  headerShown: false,
  tabBarActiveTintColor: ACTIVE_COLOR,
  tabBarInactiveTintColor: DEFAULT_COLOR,
};

export const MainBottomNavigation = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName={MainBottomTab.HomeScreen}
      screenOptions={baseScreenOptions}
    >
      <TabNavigator.Screen
        name={MainBottomTab.HomeScreen}
        component={UserFeedScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <TabNavigator.Screen
        name={MainBottomTab.ProfileScreen}
        component={ProfileScreen}
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

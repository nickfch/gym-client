import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainBottomTab } from 'src/constants/navigation';
import { UserFeed } from 'src/features/UserFeed';
import { ProfileScreen } from 'src/features/Profile';
import { WorkoutScreen } from 'src/features/WorkoutScreen';

import { LeftDrawer } from './MainDrawer';

const TabNavigator = createBottomTabNavigator();

export const MainBottomNavigation = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName={MainBottomTab.HomeScreen}
      screenOptions={{ headerShown: false }}
    >
      <TabNavigator.Screen
        name={MainBottomTab.HomeScreen}
        component={UserFeed}
      />
      <TabNavigator.Screen
        name={MainBottomTab.ProfileScreen}
        component={ProfileScreen}
      />
      <TabNavigator.Screen name="All" component={LeftDrawer} />
    </TabNavigator.Navigator>
  );
};

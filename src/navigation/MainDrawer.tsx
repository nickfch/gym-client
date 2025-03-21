import { DrawerStack } from 'src/constants/navigation';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserSettingsScreen } from 'src/screens/UserSettingsScreen';

const Drawer = createDrawerNavigator();

export const LeftDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={DrawerStack.Settings}>
      <Drawer.Screen
        name={DrawerStack.Settings}
        component={UserSettingsScreen}
      />
    </Drawer.Navigator>
  );
};

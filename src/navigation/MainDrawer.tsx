import { DrawerStack } from 'src/constants/navigation';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from 'src/features/Settings';

const Drawer = createDrawerNavigator();

export const LeftDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={DrawerStack.Settings}>
      <Drawer.Screen name={DrawerStack.Settings} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

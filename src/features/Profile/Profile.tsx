import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { MainStack, WorkoutStack } from 'src/constants/navigation';

export const Profile = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity
        onPress={() => {
          navigate(MainStack.WorkoutStack, {
            screen: WorkoutStack.PlanWorkoutScreen,
          });
        }}
      >
        <Text>Plan Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

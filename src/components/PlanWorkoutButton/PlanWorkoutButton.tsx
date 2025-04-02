import { memo, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { MainStack, WorkoutStack } from 'src/constants/navigation';
import { useTheme, makeStyles } from '@rneui/themed';

type PlanWorkoutButtonProps = {
  btnText?: string;
  onNavigate?: () => void;
  testId?: string;
};

export const PlanWorkoutButton = memo<PlanWorkoutButtonProps>(
  ({ btnText, onNavigate, testId = 'plan-workout-btn' }) => {
    const { navigate } = useNavigation();
    const { theme } = useTheme();
    const { t } = useTranslation();
    const styles = useStyles();

    const navigateToPlanWorkoutScreen = useCallback(() => {
      onNavigate?.();
      navigate(MainStack.WorkoutStack, {
        screen: WorkoutStack.PlanWeeklyWorkoutsScreen,
      });
    }, [navigate, onNavigate]);

    return (
      <TouchableOpacity onPress={navigateToPlanWorkoutScreen} testID={testId}>
        <View style={styles.line}>
          <Ionicons
            name="fitness-outline"
            size={16}
            color={theme.colors.primary}
          />
          <Text style={styles.text}>{btnText ?? t('plan-workout-btn')}</Text>
        </View>
      </TouchableOpacity>
    );
  },
);

const useStyles = makeStyles((theme) => ({
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  text: {
    marginLeft: 8,
    fontSize: 14,
    color: theme.colors.primary,
  },
}));

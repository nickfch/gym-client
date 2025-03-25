import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@rneui/themed';
import { PlanWorkoutButton } from 'src/components/PlanWorkoutButton';
import { FeedCard } from 'src/components/FeedCard';

export const EmptyWorkoutsCard = () => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <FeedCard>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          {t('user-feed--no-scheduled-workouts-label')}
        </Text>
      </View>
      <PlanWorkoutButton />
    </FeedCard>
  );
};

const useStyles = makeStyles({
  textWrapper: {
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
  },
});

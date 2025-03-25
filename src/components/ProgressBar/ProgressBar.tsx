import { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { makeStyles } from '@rneui/themed';

type ProgressBarProps = {
  progress: number;
  label?: string;
};

export const ProgressBar = memo<ProgressBarProps>(({ progress, label }) => {
  const styles = useStyles();

  return (
    <>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>
      {label && (
        <Text style={styles.progressBarLabel}>{label} workouts completed</Text>
      )}
    </>
  );
});

const useStyles = makeStyles((theme) => ({
  progressBarContainer: {
    height: 8,
    backgroundColor: theme.colors.background,
    borderRadius: 4,
    marginTop: 16,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  progressBarLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
    textAlign: 'center',
  },
}));

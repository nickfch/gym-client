import { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ProgressBarProps = {
  progress: number;
  label?: string;
};

export const ProgressBar = memo<ProgressBarProps>(({ progress, label }) => {
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

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginTop: 16,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4F46E5',
    borderRadius: 4,
  },
  progressBarLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
    textAlign: 'center',
  },
});

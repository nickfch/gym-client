import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ExerciseToolbarProps } from './ExerciseToolbar.types';
import { useStyles } from './ExerciseToolbar.styles';

export const ExerciseToolbar = memo<ExerciseToolbarProps>(
  ({ timeRemaining, metrics, isActive, onToggleTimer, onReset }) => {
    const styles = useStyles();

    const formatTime = (seconds: number): string => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs
        .toString()
        .padStart(2, '0')}`;
    };

    return (
      <>
        <View style={styles.bottomPanel}>
          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{formatTime(timeRemaining)}</Text>
            <Text style={styles.timerLabel}>Time Remaining</Text>

            <View style={styles.timerButtons}>
              <TouchableOpacity
                style={[
                  styles.timerButton,
                  isActive ? styles.stopButton : styles.startButton,
                ]}
                onPress={onToggleTimer}
              >
                <Text style={styles.buttonText}>
                  {isActive ? 'Pause' : 'Start'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.resetButton} onPress={onReset}>
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.metricsContainer}>
            <Text style={styles.metricsTitle}>Performance Metrics</Text>

            <View style={styles.metricRow}>
              <View style={styles.metric}>
                <Text style={styles.metricLabel}>Reps</Text>
                <Text style={styles.metricValue}>
                  {metrics.repsCompleted}/{metrics.totalReps}
                </Text>
              </View>

              <View style={styles.metric}>
                <Text style={styles.metricLabel}>Form</Text>
                <Text style={styles.metricValue}>{metrics.formQuality}</Text>
              </View>
            </View>

            <View style={styles.metricRow}>
              <View style={styles.metric}>
                <Text style={styles.metricLabel}>Range</Text>
                <Text style={styles.metricValue}>{metrics.rangeOfMotion}%</Text>
              </View>

              <View style={styles.metric}>
                <Text style={styles.metricLabel}>Tempo</Text>
                <Text style={styles.metricValue}>{metrics.tempo}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.navigationButtons}>
          <TouchableOpacity style={[styles.navButton, styles.prevButton]}>
            <Text style={styles.navButtonText}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.navButton, styles.nextButton]}>
            <Text style={styles.navButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  },
);

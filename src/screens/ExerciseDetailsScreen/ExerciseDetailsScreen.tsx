import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Video } from 'expo-av';

import { styles } from './ExerciseDetailsScreen.styles';
import { InteractionMetrics } from './ExerciseDetailsScreen.types';
import { exerciseData, initialMetrics } from './mockData';

export const ExerciseDetailsScreen = () => {
  const [timeRemaining, setTimeRemaining] = useState(exerciseData.duration);
  const [isActive, setIsActive] = useState(false);
  const [metrics, setMetrics] = useState<InteractionMetrics>(initialMetrics);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
        // Simulate updating reps as time passes
        if (
          timeRemaining % 5 === 0 &&
          metrics.repsCompleted < metrics.totalReps
        ) {
          setMetrics((prev) => ({
            ...prev,
            repsCompleted: Math.min(prev.repsCompleted + 1, prev.totalReps),
          }));
        }
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeRemaining, metrics.repsCompleted, metrics.totalReps]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTimeRemaining(exerciseData.duration);
    setIsActive(false);
    setMetrics(initialMetrics);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{exerciseData.title}</Text>
          <Text style={styles.subtitle}>
            {exerciseData.category} • {exerciseData.difficulty} • Equipment:{' '}
            {exerciseData.equipment.join(', ')}
          </Text>
        </View>

        <View style={styles.videoContainer}>
          <Image
            source={{ uri: exerciseData.videoUri }}
            style={styles.video}
            resizeMode="cover"
          />
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>How to perform</Text>
          <Text style={styles.description}>{exerciseData.description}</Text>

          <Text style={styles.subSectionTitle}>Steps:</Text>
          {exerciseData.steps.map((step, index) => (
            <View key={`step-${index}`} style={styles.stepContainer}>
              <Text style={styles.stepText}>
                <Text style={styles.stepNumber}>{index + 1}. </Text>
                {step}
              </Text>
            </View>
          ))}

          <Text style={styles.subSectionTitle}>Helpful Tips:</Text>
          {exerciseData.tips.map((tip, index) => (
            <View key={`tip-${index}`} style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• {tip}</Text>
            </View>
          ))}

          <Text style={styles.subSectionTitle}>Common Mistakes to Avoid:</Text>
          {exerciseData.mistakes.map((mistake, index) => (
            <View key={`mistake-${index}`} style={styles.bulletPoint}>
              <Text style={styles.bulletText}>• {mistake}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

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
              onPress={toggleTimer}
            >
              <Text style={styles.buttonText}>
                {isActive ? 'Pause' : 'Start'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resetButton} onPress={resetTimer}>
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
    </SafeAreaView>
  );
};

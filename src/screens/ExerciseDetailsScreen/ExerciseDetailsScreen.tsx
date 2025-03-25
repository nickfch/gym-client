import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { Video } from 'expo-av';
import { useGetCurrentExercise } from 'src/requests/hooks/useGetCurrentExercise';
import { ExerciseToolbar } from './components/ExerciseToolbar';
import { styles } from './ExerciseDetailsScreen.styles';
import { InteractionMetrics } from './ExerciseDetailsScreen.types';
import { exerciseData, initialMetrics } from './mockData';
import { ExerciseDetailsProps } from './ExerciseDetailsScreen.types';

export const ExerciseDetailsScreen: React.FC<ExerciseDetailsProps> = ({
  route: {
    params: { exerciseId },
  },
}) => {
  const { data } = useGetCurrentExercise(exerciseId);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [metrics, setMetrics] = useState<InteractionMetrics>(initialMetrics);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev + 1);
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
    }

    return () => clearInterval(interval);
  }, [isActive, timeRemaining, metrics.repsCompleted, metrics.totalReps]);

  const resetExercise = useCallback(() => {
    setTimeRemaining(0);
    setIsActive(false);
    setMetrics(initialMetrics);
  }, []);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{data?.data?.name}</Text>
          <Text style={styles.subtitle}>
            {data?.data.category} • {data?.data.muscle_group} • Equipment:{' '}
            {data?.data?.equipment}
          </Text>
        </View>
        <View style={styles.videoContainer}>
          {data?.data.video_example && (
            <Image
              alt={data.data.video_example.alternativeText}
              source={{ uri: data.data.video_example.url }}
              style={styles.video}
              resizeMode="cover"
            />
          )}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>How to perform</Text>
          <Text style={styles.description}>{data?.data?.description}</Text>
          {data?.data.steps && (
            <>
              <Text style={styles.subSectionTitle}>Steps:</Text>
              <View style={styles.stepContainer}>
                <Text style={styles.stepText}>{data.data.steps}</Text>
              </View>
            </>
          )}
          {data?.data.tips && (
            <>
              <Text style={styles.subSectionTitle}>Helpful Tips:</Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.bulletText}>{data?.data?.tips}</Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
      <ExerciseToolbar
        timeRemaining={timeRemaining}
        metrics={metrics}
        onReset={resetExercise}
        onToggleTimer={toggleTimer}
        isActive={isActive}
      />
    </SafeAreaView>
  );
};

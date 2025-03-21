import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './Progress.styles';

export const Progress = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#4F46E5" />
      <Text style={styles.loadingText}>Loading your fitness data...</Text>
    </View>
  );
};

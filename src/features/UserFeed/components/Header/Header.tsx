import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './Header.styles';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity style={styles.profileButton}>
        <Ionicons name="person-circle-outline" size={28} color="#4F46E5" />
      </TouchableOpacity>
    </View>
  );
};

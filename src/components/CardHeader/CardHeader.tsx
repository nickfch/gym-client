import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { styles } from './CardHeader.styles';

interface CardHeaderProps {
  title: string;
  actionText?: string;
  onAction?: () => void;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  actionText,
  onAction,
}) => {
  return (
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>{title}</Text>
      {actionText && onAction && (
        <TouchableOpacity onPress={onAction}>
          <Text style={styles.seeAllText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

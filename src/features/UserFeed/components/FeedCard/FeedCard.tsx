import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

import { styles } from './FeedCard.styles';

interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
}

export const FeedCard: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

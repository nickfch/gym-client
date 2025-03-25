import { memo, FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useStyles } from './CardHeader.styles';
import { CardHeaderProps } from './CardHeader.types';

export const CardHeader = memo<CardHeaderProps>(
  ({ title, actionText, onAction }) => {
    const styles = useStyles();

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
  },
);

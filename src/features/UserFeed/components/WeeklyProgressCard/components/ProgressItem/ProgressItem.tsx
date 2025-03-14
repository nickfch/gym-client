import { PropsWithChildren, FC, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ProgressItemProps = {
  name: string;
};

export const ProgressItem: FC<PropsWithChildren<ProgressItemProps>> = ({
  name,
  children,
}) => {
  return (
    <View style={styles.progressItem}>
      <View style={styles.progressCircle}>{children}</View>
      <Text style={styles.progressText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressItem: {
    alignItems: 'center',
  },
  progressCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    flexDirection: 'row',
  },
  progressText: {
    fontSize: 14,
    color: '#4B5563',
  },
});

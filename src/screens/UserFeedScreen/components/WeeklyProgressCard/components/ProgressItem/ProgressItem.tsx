import { PropsWithChildren, FC, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { makeStyles } from '@rneui/themed';

type ProgressItemProps = {
  name: string;
};

export const ProgressItem: FC<PropsWithChildren<ProgressItemProps>> = ({
  name,
  children,
}) => {
  const styles = useStyles();

  return (
    <View style={styles.progressItem}>
      <View style={styles.progressCircle}>{children}</View>
      <Text style={styles.progressText}>{name}</Text>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  progressItem: {
    alignItems: 'center',
  },
  progressCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    flexDirection: 'row',
  },
  progressText: {
    fontSize: 14,
    color: theme.colors.grey3,
  },
}));

import { StyleSheet } from 'react-native';
import { makeStyles } from '@rneui/themed';

export const useStyles = makeStyles((theme) => ({
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  progressNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  progressLabel: {
    fontSize: 14,
    color: theme.colors.grey0,
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  progressBarLabel: {
    fontSize: 14,
    color: theme.colors.grey0,
    marginTop: 8,
    textAlign: 'center',
  },
}));

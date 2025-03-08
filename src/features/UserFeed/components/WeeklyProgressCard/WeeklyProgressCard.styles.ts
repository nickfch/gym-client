import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
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
  progressNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  progressLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  progressText: {
    fontSize: 14,
    color: '#4B5563',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginTop: 16,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4F46E5',
    borderRadius: 4,
  },
  progressBarLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
    textAlign: 'center',
  },
});

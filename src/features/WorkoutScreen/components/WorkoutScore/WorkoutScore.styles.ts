import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    margin: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  maxScore: {
    fontSize: 20,
    color: '#999',
    marginLeft: 4,
  },
  feedback: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  achievementsCard: {
    marginBottom: 20,
  },
  achievementsContainer: {
    gap: 12,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  achievementText: {
    fontSize: 16,
    color: '#111827',
  },
});

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  feedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  feedItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  feedItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedItemDetails: {
    marginLeft: 12,
    flex: 1,
  },
  feedItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  feedItemSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
});

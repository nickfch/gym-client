import { makeStyles } from '@rneui/themed';

export const useStyles = makeStyles((theme) => ({
  feedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.grey5,
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
    backgroundColor: theme.colors.background,
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
    color: theme.colors.grey0,
  },
  feedItemSubtitle: {
    fontSize: 14,
    color: theme.colors.grey1,
    marginTop: 2,
  },
}));

import { makeStyles } from '@rneui/themed';

export const useStyles = makeStyles((theme) => ({
  workoutContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    overflow: 'hidden',
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  workoutTitleContainer: {
    flex: 1,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.grey0,
  },
  workoutTime: {
    fontSize: 14,
    color: theme.colors.grey1,
    marginTop: 4,
  },
  workoutDuration: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  workoutDurationText: {
    fontSize: 14,
    color: theme.colors.black,
    marginLeft: 4,
  },
  exercisesList: {
    marginVertical: 8,
  },
  startButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  startButtonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
}));

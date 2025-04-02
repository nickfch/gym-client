import { makeStyles } from '@rneui/themed';

export const useStyles = makeStyles({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  expandedCard: {
    shadowOpacity: 0.2,
    elevation: 4,
  },
  cardHeader: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  typeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  typeText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
    textTransform: 'capitalize',
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailText: {
    marginLeft: 4,
    color: '#555',
    fontSize: 14,
  },
  exercisesContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  exercisesSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  exerciseItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  exerciseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  exerciseNumber: {
    backgroundColor: '#f0f0f0',
    width: 24,
    height: 24,
    borderRadius: 12,
    textAlign: 'center',
    lineHeight: 24,
    marginRight: 8,
    fontSize: 12,
    fontWeight: '500',
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '500',
  },
  exerciseDetails: {
    marginLeft: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exerciseText: {
    color: '#666',
    fontSize: 14,
  },
  restTime: {
    color: '#888',
    fontSize: 12,
  },
  startButton: {
    backgroundColor: '#22c55e',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  startButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

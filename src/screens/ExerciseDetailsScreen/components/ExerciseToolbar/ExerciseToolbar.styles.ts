import { makeStyles } from '@rneui/themed';

export const useStyles = makeStyles((theme) => ({
  bottomPanel: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  timerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    paddingRight: 20,
    borderRightWidth: 1,
    borderRightColor: '#eeeeee',
    flex: 1,
  },
  timerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  timerLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 4,
  },
  timerButtons: {
    flexDirection: 'row',
    marginTop: 8,
  },
  timerButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
  },
  startButton: {
    backgroundColor: '#2ecc71',
  },
  stopButton: {
    backgroundColor: '#e74c3c',
  },
  resetButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#ecf0f1',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  resetButtonText: {
    color: '#7f8c8d',
    fontWeight: '600',
    fontSize: 14,
  },
  metricsContainer: {
    flex: 1.5,
  },
  metricsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  metric: {
    backgroundColor: '#f5f7fa',
    padding: 10,
    borderRadius: 12,
    width: '48%',
  },
  metricLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3498db',
  },
  navigationButtons: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
    backgroundColor: 'white',
  },
  navButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 8,
  },
  prevButton: {
    backgroundColor: '#ecf0f1',
  },
  nextButton: {
    backgroundColor: '#3498db',
  },
  navButtonText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#fff',
  },
}));

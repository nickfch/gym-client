import { renderHook } from '@testing-library/react-hooks';
import { useGetUserWorkouts } from 'src/requests/hooks/useGetUserWorkouts';
import mockedWorkouts from 'src/mocks/get-user-workouts.json';
import { useUserFeedLogic } from './UserFeedScreen.logic';

jest.mock('src/requests/hooks/useGetUserWorkouts');

describe('useUserFeedLogic', () => {
  beforeEach(() => {
    (useGetUserWorkouts as jest.Mock).mockReturnValue({
      data: {
        data: mockedWorkouts,
      },
      isLoading: false,
    });
  });

  it('should return normalized data and workout IDs correctly', async () => {
    renderHook(() => useUserFeedLogic());

    expect(useGetUserWorkouts).toHaveBeenCalled();
    expect(useGetUserWorkouts).toHaveBeenCalledTimes(1);
  });

  it('should return the correct workout IDs', async () => {
    const { result } = renderHook(() => useUserFeedLogic());

    expect(result.current.nearestWorkoutId).toEqual('doc-123');
  });

  it('should contain the correct uncompleted workout IDs', async () => {
    const { result } = renderHook(() => useUserFeedLogic());

    expect(result.current.uncompletedWorkoutIds.length).not.toEqual(
      result.current.normalizedData.items.length,
    );
  });
});

import { API } from 'src/constants/settings';
import { StrapiQueryParams } from 'src/types/queryPrams';
import { GetUserWorkout, GetUserWorkouts } from './types';

export const requestUserWorkouts = async () => {
  const qParams = new URLSearchParams();
  qParams.append(StrapiQueryParams.PopulateLevel, '3');

  const response = await fetch(new URL(`${API}/user-workouts?${qParams}`));

  return (await response.json()) as GetUserWorkouts;
};

export const requestUserWorkoutById = async (
  workoutId: string,
): Promise<GetUserWorkout> => {
  const qParams = new URLSearchParams();
  qParams.append(StrapiQueryParams.PopulateLevel, '4');

  const response = await fetch(
    new URL(`${API}/user-workouts/${workoutId}?${qParams}`),
  );

  return (await response.json()) as GetUserWorkout;
};

export const postCompleteWorkout = async (
  workoutId: string,
  value: boolean,
) => {
  const response = await fetch(new URL(`${API}/user-workouts/${workoutId}`), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        completed: value,
      },
    }),
  });

  return (await response.json()) as GetUserWorkout;
};

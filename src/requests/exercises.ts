import { API } from 'src/constants/settings';
import { mapAuthHeaders } from 'src/utils/http';
import { GetExerciseResponse } from './types';

export const requestCurrentExerciseById = async (exerciseId: string) => {
  const config = await mapAuthHeaders({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = await fetch(
    new URL(`${API}/exercises/${exerciseId}`),
    config,
  );

  return (await response.json()) as GetExerciseResponse;
};

import { API } from 'src/constants/settings';
import { GetExerciseResponse } from './types';

export const requestCurrentExerciseById = async (exerciseId: string) => {
  const response = await fetch(new URL(`${API}/exercises/${exerciseId}`));

  return (await response.json()) as GetExerciseResponse;
};

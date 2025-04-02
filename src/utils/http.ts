import { getValue } from 'src/utils/localeStorage';
import { UserKeys } from 'src/constants/localStorage';

// TODO: move to state management
let _localeToken: string | null = null;

export const mapAuthHeaders = async (
  fetchOptions: RequestInit,
): Promise<RequestInit> => {
  if (!_localeToken) {
    _localeToken = await getValue(UserKeys.UserToken);
  }

  if (_localeToken) {
    fetchOptions.headers = {
      ...fetchOptions.headers,
      Authorization: `Bearer ${_localeToken}`,
    };
  }
  return fetchOptions;
};

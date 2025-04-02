import { useCallback } from 'react';
import { setValue } from 'src/utils/localeStorage';
import { UserKeys } from 'src/constants/localStorage';

export const useLogout = (callback: () => void) => {
  const logout = useCallback(() => {
    setValue(UserKeys.UserToken, '').then(callback).catch(console.error);
  }, [callback]);

  return { logout };
};

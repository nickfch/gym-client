import {
  PropsWithChildren,
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import { AuthProviderContext } from './auth.types';

const AuthContext = createContext<AuthProviderContext>({
  token: null,
  setToken: (token: string) => {},
  removeToken() {
    this.token = null;
  },
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null);

  const removeToken = useCallback(() => {
    setToken(null);
  }, []);

  const value = useMemo(
    () => ({ token, setToken, removeToken }),
    [token, setToken, removeToken],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthState = () => useContext(AuthContext);

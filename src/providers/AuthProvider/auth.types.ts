export type AuthProviderContext = {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
};

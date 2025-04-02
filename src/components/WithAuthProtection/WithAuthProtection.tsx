import { PropsWithChildren, useEffect, useState } from 'react';
import { useBinaryState } from 'src/hooks/useBinaryState';
import { getValue } from 'src/utils/localeStorage';
import { useNavigation } from '@react-navigation/native';
import { MainStack, AuthStack } from 'src/constants/navigation';
import { UserKeys } from 'src/constants/localStorage';

export const WithAuthProtection = ({ children }: PropsWithChildren) => {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const { value, turnOn } = useBinaryState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getValue(UserKeys.UserToken);
      if (!token) {
        navigate(MainStack.AuthStack, {
          screen: AuthStack.SignInScreen,
          params: undefined,
        });
      } else {
        turnOn();
      }
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  return value && !isLoading ? <>{children}</> : null;
};

export const protectAuthComponent = <TProp extends object>(
  Component: React.ComponentType<TProp>,
) => {
  return (props: TProp) => {
    return (
      <WithAuthProtection>
        <Component {...props} />
      </WithAuthProtection>
    );
  };
};

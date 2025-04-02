import React, { useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSignInMutation } from 'src/requests';
import { MainStack, AuthStack } from 'src/constants/navigation';
import { TextInputField } from 'src/components/TextInputField';
import { setValue } from 'src/utils/localeStorage';
import { UserKeys } from 'src/constants/localStorage';

import { useStyles } from './SignInScreen.styles';

type SignInScreenProps = NativeStackScreenProps<any>;

const signInSchema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().min(3).required(),
  })
  .required();

type SignInFormData = {
  email: string;
  password: string;
};

export const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const styles = useStyles();
  const signin = useSignInMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    resetField,
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = useCallback(
    ({ email, password }: SignInFormData) => {
      signin.mutate(
        { identifier: email, password },
        {
          async onSuccess(data, variables, context) {
            // Need to save the token in the context
            // and navigate to the main screen
            await setValue(UserKeys.UserToken, data.jwt);
            await setValue(UserKeys.User, data.user);
            navigation.navigate(MainStack.MainBottomTab);
          },
          onError(error, variables, context) {
            console.error('Error:', error);
            ['email', 'password'].forEach((field) => {
              resetField(field as keyof SignInFormData);
              setError(field as keyof SignInFormData, {
                type: 'manual',
                message: 'Invalid credentials',
              });
            });
          },
        },
      );
    },
    [signin],
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Sign In</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputField
              placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.email?.message}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputField
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              error={errors.password?.message}
            />
          )}
          name="password"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleSignIn)}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(MainStack.AuthStack, {
                screen: AuthStack.SignUpScreen,
              })
            }
          >
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

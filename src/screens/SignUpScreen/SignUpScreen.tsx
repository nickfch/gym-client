import React, { useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import * as zod from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStack, AuthStack, MainBottomTab } from 'src/constants/navigation';
import { setValue } from 'src/utils/localeStorage';
import { UserKeys } from 'src/constants/localStorage';
import { TextInputField } from 'src/components/TextInputField';
import { useSignUpMutation } from 'src/requests/hooks/useAuthMutations';
import { useStyles } from './SignUpScreen.styles';

type SignUpValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const authSchema = zod
  .object({
    fullName: zod.string().min(1, 'Full Name is required'),
    email: zod.string().email('Email is invalid'),
    password: zod
      .string()
      .min(6, 'Password must be at least 6 characters long'),
    confirmPassword: zod.string().min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const SignUpScreen: React.FC<NativeStackScreenProps<any>> = ({
  navigation,
}) => {
  const styles = useStyles();
  const signUp = useSignUpMutation();
  const {
    control,
    handleSubmit,
    setError,
    getFieldState,
    formState: { errors },
  } = useForm<SignUpValues>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(authSchema),
    mode: 'onChange',
  });

  const submitForm = useCallback(
    (values: SignUpValues) => {
      signUp.mutate(
        {
          username: values.fullName,
          email: values.email,
          password: values.password,
        },
        {
          async onSuccess(data, variables, context) {
            // and navigate to the main screen
            await setValue(UserKeys.UserToken, data.jwt);
            await setValue(UserKeys.User, data.user);
            navigation.navigate(MainStack.MainBottomTab, {
              screen: MainBottomTab.HomeScreen,
            });
          },
          onError(error, variables, context) {
            console.error('Sign Up Error:', error);
          },
        },
      );
    },
    [navigation, signUp],
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.inner}>
          <Text style={styles.title}>Create Account</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputField
                placeholder="Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="words"
                error={errors.fullName?.message}
              />
            )}
            name="fullName"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputField
                placeholder="Email"
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
          {getFieldState('password').isDirty &&
            !getFieldState('password').error && (
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
                    error={errors.confirmPassword?.message}
                  />
                )}
                name="confirmPassword"
              />
            )}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(submitForm)}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(MainStack.AuthStack, {
                  screen: AuthStack.SignInScreen,
                })
              }
            >
              <Text style={styles.linkText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

import { TextInputProps } from 'react-native';

export type TextInputFieldProps = {
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  label?: string;
  error?: string;
  testid?: string;
} & TextInputProps;

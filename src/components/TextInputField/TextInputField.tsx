import { memo } from 'react';
import { View, TextInput, Text } from 'react-native';

import { TextInputFieldProps } from './TextInputField.types';
import { useStyles } from './TextInputField.styles';

export const TextInputField = memo<TextInputFieldProps>(
  ({
    value,
    onChangeText,
    placeholder,
    error,
    label,
    testid = 'text-input-field',
    keyboardType = 'default',
    autoCapitalize = 'none',
    ...otherInputProps
  }) => {
    const styles = useStyles();

    return (
      <View style={styles.inputContainer} testID={testid}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          style={[styles.input, error && styles.inputError]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          {...otherInputProps}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  },
);

import React from 'react';
import { TextInput } from 'react-native';
import styles from './style';

const CustomTextInput = ({ style, secureTextEntry, onChangeText, value, ...props }) => {
  const {
    placeholder,
    keyboardType,
    autoCapitalize,
    autoCorrect,
    placeholderTextColor,
    ...otherProps
  } = props;

  return (
    <TextInput
      style={[styles.textInput, style]}
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}  // Pass the onChangeText prop
      value={value}  // Pass the value prop
      {...otherProps}
    />
  );
};

export default CustomTextInput;

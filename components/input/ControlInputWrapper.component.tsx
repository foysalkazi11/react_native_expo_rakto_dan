import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Controller, Control, RegisterOptions } from 'react-hook-form';
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';

export type ControlInputWrapperProps = {
  control?: Control<any> | undefined // Optional control prop from react-hook-form
  name?: string; // Optional field name (required if using react-hook-form)
  rules?:  RegisterOptions<any, string>; // Validation rules (optional)
  children: React.ReactNode; // The input field passed as children
  errorMessageStyle?: object; // Optional style for error messages
};

const ControlInputWrapper: React.FC<ControlInputWrapperProps> = ({
  control,
  name,
  rules = {},
  children,
  errorMessageStyle = {},
}) => {
    const {theme} = useBrandTheme()

    const styles = StyleSheet.create({
        inputContainer: {
            flex:1,
            width:"100%",
            position:"relative"
        },
  error: {
    position: 'absolute',
    top:"100%",
    fontSize: 12,
    color: theme.colors.error,
    
  },
});
  if (control && name) {
    // Use react-hook-form's Controller if control and name are provided
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <View style={styles.inputContainer}>
            {/* Render children and pass react-hook-form's methods */}
            {React.cloneElement(children as React.ReactElement<any>, {
              onBlur,
              onChangeText: onChange,
              value,
            })}
            {error && <Text style={[styles.error, errorMessageStyle]}>{error.message}</Text>}
          </View>
        )}
      />
    );
  }

  // If no control is provided, render children as a regular input component
  return children;
};



export default ControlInputWrapper;

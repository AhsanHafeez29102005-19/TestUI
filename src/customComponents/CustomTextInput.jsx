import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';

const CustomTextInput = ({
  icon,
  placeholder,
  value,
  onChangeText,
  type,
  keyboardType,
  error,
}) => {
  return (
    <View style={[styles.inputWrapper, error ? styles.errorBorder : null]}>
      {icon && <Image source={icon} style={styles.icon} />}
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={type === 'password'}
        keyboardType={keyboardType || 'default'}
        placeholderTextColor="#999"
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    color: '#000',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';

const CommonButton = ({onPress, title, bgColor, textColor, icon,style}) => {
  return (
    <TouchableOpacity style={[styles.button, {}]} onPress={onPress}>
      {icon && <Image source={icon} style={styles.icon} />}
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00c6ba',
    height: 50,
    marginTop: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'white',
    marginRight: 10,
  },
});

export default CommonButton;

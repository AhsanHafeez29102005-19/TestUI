// src/screens/QrHome.js
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../customComponents/CommonButton';

const QrHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/G10.png')} // Replace with your QR icon image
        style={styles.qrIcon}
      />
      <View style={{width: '90%'}}>
        <CommonButton
          title={'Scan now'}
          textColor={'#fff'}
          onPress={() => {
            navigation.navigate('Scanner');
          }}
        />
      </View>
    </View>
  );
};

export default QrHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrIcon: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
});

// src/screens/QRScanner.js
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Alert,
  TouchableOpacity,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import CommonButton from '../customComponents/CommonButton';

const Scanner = () => {
  const [scannedData, setScannedData] = useState(null);

  const onSuccess = e => {
    const data = e.data;
    setScannedData(data);

    const isValidURL =
      typeof data === 'string' &&
      (data.startsWith('http://') || data.startsWith('https://'));

    Alert.alert('Scanned', data, [
      isValidURL
        ? {
            text: 'Open Link',
            onPress: () => Linking.openURL(data),
          }
        : undefined,
      {text: 'OK'},
    ]);
  };

  return (
    <View style={styles.container}>
      {!scannedData ? (
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          vibrate={false}
          showMarker
          topContent={<Text style={styles.topText}>Point to QR Code</Text>}
          containerStyle={{backgroundColor: '#1f1f1f'}}
          cameraStyle={{height: 300}}
        />
      ) : (
        <View style={styles.result}>
          <Text style={styles.topText}>Scanned:</Text>
          <Text style={styles.dataText}>{scannedData}</Text>
          <View style={{width: '90%'}}>
            <CommonButton
              onPress={() => setScannedData(null)}
              title={'Scan Again'}
              textColor={'#fff'}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
  topText: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#00c6ba',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  result: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataText: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
});

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CommonButton from '../customComponents/CommonButton';
const EnableBiometricScreen = () => {
  
const navigation = useNavigation();
  const handleEnable = () => {
    

    // TODO: Call biometric auth prompt here if desired
    navigation.navigate('BiometricLogin');
  };

  const handleSkip = () => {
    navigation.navigate('Auth');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentBox}>
        <Image
          source={require('../images/BioHand.png')} 
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Enable Biometrics?</Text>
        <Text style={styles.subtitle}>
          Use biometrics to sign in quickly and securely
        </Text>

        <View style={{width:'100%',marginBottom:"10%"}}>
             <CommonButton onPress={handleEnable} title={"Enable"}/>

        </View>
       
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EnableBiometricScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  contentBox: {
    backgroundColor: '#111',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#00c6ba',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  skipText: {
    color: '#00c6ba',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

export default function ForgetPass() {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log("Reset link sent to:", email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Image style={{height:60,width:60}} source={require('../images/locked.png')} />
        <Image style={{height:30,width:30}} source={require('../images/qs.png')} />
      </View>

      <Text style={styles.title}>FORGOT PASSWORD</Text>
      <Text style={styles.subtitle}>
        Enter your Email associated with your account to receive the reset link
      </Text>

      <View style={styles.inputContainer}>
      <Image style={{height:20,width:20}}  source={require('../images/email.png')} />
      <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1a1f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  iconCircle: {
    marginBottom: 20,
    position: 'relative',
    borderRadius: 50,
    padding: 25,
    borderWidth: 1,
    borderColor: '#00b894',
  },
  questionMark: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  title: {
    color: '#00b894',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    letterSpacing: 1,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '100%',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#000',
  },
  button: {
    backgroundColor: '#00b894',
    borderRadius: 25,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

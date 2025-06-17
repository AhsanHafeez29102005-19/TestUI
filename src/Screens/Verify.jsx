import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Verify = () => {
  const [timer, setTimer] = useState(70);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text, index) => {
   
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };
  const navigation= useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
       
        <TouchableOpacity onPress={()=>{
            navigation.goBack()
        }} style={styles.backButton}>
        
         <Image  style={{height:24, width:24,tintColor:"#fff"}}source={require('../images/back.png')}/>
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.heading}>Verify Your Account</Text>

        {/* Avatar */}
        <View style={styles.avatar}>
        <Image  style={{height:70, width:70,}}source={require('../images/profile.png')}/>

        </View>

        
        <Text style={styles.name}>Grachica Zoya</Text>
        <Text style={styles.email}>grachicazoya12@gmail.com</Text>

        
        <View style={styles.infoBox}>
        <Image  style={{height:24, width:24,}}source={require('../images/warn.png')}/>

          <Text style={styles.infoText}>
            We have sent you a 6-digit verification code to your email. Kindly check.
          </Text>
        </View>

        
        <Text style={styles.timer}>00:{timer < 10 ? `0${timer}` : timer}</Text>

       
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>

       
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn’t receive OTP? </Text>
          <TouchableOpacity onPress={() => setTimer(30)}>
            <Text style={styles.resendLink}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
  );
};

export default Verify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#028d85',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    marginTop: 150,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 50,
  },
  avatar: {
    backgroundColor: '#d0f0ec',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  name: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  email: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#00c6ba',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    color: 'white',
    flex: 1,
    fontSize: 12,
  },
  timer: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginVertical: 20,
  },
  otpInput: {
    width: 45,
    height: 50,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 8,
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {
    color: 'gray',
  },
  resendLink: {
    color: '#00c6ba',
    fontWeight: 'bold',
  },
});

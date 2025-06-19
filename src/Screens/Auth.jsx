
import React, {useState} from 'react';
import {View, Text, Dimensions, SafeAreaView, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../customComponents/CustomTextInput';
import CommonButton from '../customComponents/CommonButton';
import AuthStyles from '../AuthStyles';

const {width} = Dimensions.get('window');

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');

  const navigation = useNavigation();

  const validateEmail = email => /^\S+@\S+\.\S+$/.test(email);
  const validatePassword = password =>
    /[A-Z]/.test(password) && password.length >= 8;

  const handleLogin = () => {
    let valid = true;
    if (!validateEmail(email)) {
      setEmailError('Enter a valid email');
      valid = false;
    } else setEmailError('');

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters and include 1 capital letter',
      );
      valid = false;
    } else setPasswordError('');

    if (valid) navigation.navigate('Verify');
  };

  const handleRegister = () => {
    let valid = true;
    if (fullName.trim().length === 0) {
      setNameError('Full name is required');
      valid = false;
    } else setNameError('');

    if (!validateEmail(email)) {
      setEmailError('Enter a valid email');
      valid = false;
    } else setEmailError('');

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters and include 1 capital letter',
      );
      valid = false;
    } else setPasswordError('');

    if (!agreeTerms) {
      Alert.alert('Please agree to the terms and conditions');
      valid = false;
    }

    if (valid) Alert.alert('Account created!');
  };

  return (
    <SafeAreaView style={AuthStyles.container}>
      <View style={AuthStyles.top}>
        <Text style={AuthStyles.welcome}>Hello, There</Text>
        <Text style={AuthStyles.title}>Welcome Back</Text>

        <View style={AuthStyles.toggleContainer}>
          <Text
            style={[AuthStyles.toggleBtn, isLogin && AuthStyles.activeBtn]}
            onPress={() => setIsLogin(true)}>
            Login
          </Text>
          <Text
            style={[AuthStyles.toggleBtn, !isLogin && AuthStyles.activeBtn]}
            onPress={() => setIsLogin(false)}>
            Register
          </Text>
        </View>
      </View>

      <View style={AuthStyles.bottom}>
        {isLogin ? (
          <>
            <Text style={AuthStyles.heading}>Login to Your Account</Text>
            <Text style={AuthStyles.subText}>
              Make sure that you already have an account
            </Text>

            <CustomTextInput
              placeholder="Email"
              icon={require('../images/email.png')}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              error={emailError}
            />
            {emailError ? (
              <Text style={AuthStyles.errorText}>{emailError}</Text>
            ) : null}

            <CustomTextInput
              placeholder="Password"
              icon={require('../images/lock.png')}
              value={password}
              onChangeText={setPassword}
              type="password"
              error={passwordError}
            />
            {passwordError ? (
              <Text style={AuthStyles.errorText}>{passwordError}</Text>
            ) : null}

            <View style={AuthStyles.optionsRow}>
              <View style={AuthStyles.checkboxRow}>
                <CheckBox
                  tintColors={{true: '#00c6ba', false: '#bbb'}}
                  value={rememberMe}
                  onValueChange={setRememberMe}
                />
                <Text style={{color: '#fff'}}>Remember me</Text>
              </View>
              <Text
                style={AuthStyles.link}
                onPress={() => navigation.navigate('ForgetPass')}>
                Forget Password?
              </Text>
            </View>

            <CommonButton
              title="Login"
              bgColor="#00c6ba"
              textColor="#fff"
              onPress={handleLogin}
            />
          </>
        ) : (
          <>
            <Text style={AuthStyles.heading}>Create Your Account</Text>
            <Text style={AuthStyles.subText}>
              Make your account keep secure
            </Text>

            <CustomTextInput
              placeholder="Full Name"
              icon={require('../images/user.png')}
              value={fullName}
              onChangeText={setFullName}
              error={nameError}
            />
            {nameError ? (
              <Text style={AuthStyles.errorText}>{nameError}</Text>
            ) : null}

            <CustomTextInput
              placeholder="Email"
              icon={require('../images/email.png')}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              error={emailError}
            />
            {emailError ? (
              <Text style={AuthStyles.errorText}>{emailError}</Text>
            ) : null}

            <CustomTextInput
              placeholder="Password"
              icon={require('../images/lock.png')}
              value={password}
              onChangeText={setPassword}
              type="password"
              error={passwordError}
            />
            {passwordError ? (
              <Text style={AuthStyles.errorText}>{passwordError}</Text>
            ) : null}

            <View style={AuthStyles.checkboxRow}>
              <CheckBox
                tintColors={{true: '#00c6ba', false: '#bbb'}}
                value={agreeTerms}
                onValueChange={setAgreeTerms}
              />
              <Text style={{color: '#fff', flex: 1}}>
                I agree with the terms and conditions by creating an account
              </Text>
            </View>

            <CommonButton
              title="Create Account"
              bgColor="#00c6ba"
              textColor="#fff"
              onPress={handleRegister}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Auth;

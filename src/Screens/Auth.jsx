import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

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

  const validateEmail = email => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const validatePassword = password => {
    return /[A-Z]/.test(password) && password.length >= 8;
  };

  const handleLogin = () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters and include 1 capital letter',
      );
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      navigation.navigate('Verify');
    }
  };

  const handleRegister = () => {
    let valid = true;

    if (fullName.trim().length === 0) {
      setNameError('Full name is required');
      valid = false;
    } else {
      setNameError('');
    }

    if (!validateEmail(email)) {
      setEmailError('Enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 8 characters and include 1 capital letter',
      );
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!agreeTerms) {
      Alert.alert('Please agree to the terms and conditions');
      valid = false;
    }

    if (valid) {
      Alert.alert('Account created!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.welcome}>Hello, There</Text>
        <Text style={styles.title}>Welcome Back</Text>

        {/* Tab Switcher */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              isLogin ? styles.activeBtn : styles.inactiveBtn,
            ]}
            onPress={() => setIsLogin(true)}>
            <Text style={[styles.toggleText, isLogin && styles.activeText]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              !isLogin ? styles.activeBtn : styles.inactiveBtn,
            ]}
            onPress={() => setIsLogin(false)}>
            <Text style={[styles.toggleText, !isLogin && styles.activeText]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
        {isLogin ? (
          <>
            <Text style={styles.heading}>Login to Your Account</Text>
            <Text style={styles.subText}>
              Make sure that you already have an account
            </Text>
            <View
              style={[
                styles.inputWrapper,
                emailError ? styles.errorBorder : null,
              ]}>
              <Image
                style={{height: 24, width: 24}}
                source={require('../images/email.png')}
              />
              <TextInput
                placeholder="Email"
                style={styles.input}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            {emailError ? (
              <Text style={styles.errorText}>{emailError}</Text>
            ) : null}

            <View
              style={[
                styles.inputWrapper,
                passwordError ? styles.errorBorder : null,
              ]}>
              <Image
                style={{height: 24, width: 24}}
                source={require('../images/lock.png')}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
              />
              <Image
                style={{height: 24, width: 24}}
                source={require('../images/view.png')}
              />
            </View>
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}

            <View style={styles.optionsRow}>
              <View style={styles.checkboxRow}>
                <CheckBox
                  tintColors={{true: '#00c6ba', false: '#bbb'}}
                  value={rememberMe}
                  onValueChange={setRememberMe}
                />
                <Text style={{color: '#fff'}}>Remember me</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgetPass')}>
                <Text style={styles.link}>Forget Password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleLogin} style={styles.actionBtn}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.heading}>Create Your Account</Text>
            <Text style={styles.subText}>Make your account keep secure</Text>

            <View
              style={[
                styles.inputWrapper,
                nameError ? styles.errorBorder : null,
              ]}>
              <Image
                style={{height: 24, width: 24}}
                source={require('../images/user.png')}
              />
              <TextInput
                placeholder="Full Name"
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
              />
            </View>
            {nameError ? (
              <Text style={styles.errorText}>{nameError}</Text>
            ) : null}

            <View
              style={[
                styles.inputWrapper,
                emailError ? styles.errorBorder : null,
              ]}>
              <Image
                style={{height: 24, width: 24}}
                source={require('../images/email.png')}
              />
              <TextInput
                keyboardType="email-address"
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />
            </View>
            {emailError ? (
              <Text style={styles.errorText}>{emailError}</Text>
            ) : null}

            <View
              style={[
                styles.inputWrapper,
                passwordError ? styles.errorBorder : null,
              ]}>
              <Image
                style={{height: 24, width: 24}}
                source={require('../images/lock.png')}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
              />
              <Image
                style={{height: 24, width: 24}}
                source={require('../images/view.png')}
              />
            </View>
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}

            <View style={styles.checkboxRow}>
              <CheckBox
                tintColors={{true: '#00c6ba', false: '#bbb'}}
                value={agreeTerms}
                onValueChange={setAgreeTerms}
              />
              <Text style={{color: '#fff'}}>
                I agree with the terms and conditions by creating an account
              </Text>
            </View>
            <TouchableOpacity style={styles.actionBtn} onPress={handleRegister}>
              <Text style={styles.btnText}>Create Account</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#028d85'},
  top: {alignItems: 'center', paddingTop: 60, paddingBottom: 30},
  welcome: {fontSize: 16, color: 'white'},
  title: {fontSize: 22, fontWeight: 'bold', color: 'white', marginVertical: 10},
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#1ca69c',
    borderRadius: 30,
    width: width * 0.85,
    justifyContent: 'space-between',
    marginTop: 20,
    elevation: 5,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 25,
  },
  activeBtn: {
    backgroundColor: 'white',
    elevation: 4,
  },
  inactiveBtn: {
    backgroundColor: 'transparent',
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  activeText: {
    color: '#028d85',
    fontWeight: 'bold',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  heading: {fontSize: 18, color: 'white', fontWeight: 'bold'},
  subText: {color: 'gray', marginBottom: 20},
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  input: {flex: 1, padding: 10},
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginVertical: 5,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {color: '#00c6ba', fontWeight: '500'},
  actionBtn: {
    backgroundColor: '#00c6ba',
    padding: 15,
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
  },
  btnText: {color: 'white', fontWeight: 'bold'},
  errorText: {color: 'red', marginBottom: 5, marginLeft: 10},
  errorBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default Auth;

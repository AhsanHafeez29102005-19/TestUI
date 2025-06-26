// import React, {useState, useEffect} from 'react';
// import {useRoute} from '@react-navigation/native';
// import {
//   View,
//   Text,
//   Dimensions,
//   SafeAreaView,
//   Alert,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import {useNavigation} from '@react-navigation/native';
// import CustomTextInput from '../customComponents/CustomTextInput';
// import CommonButton from '../customComponents/CommonButton';
// import AuthStyles from '../AuthStyles';

// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';

// const {width} = Dimensions.get('window');

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [nameError, setNameError] = useState('');

//   const navigation = useNavigation();

//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId:
//         '897459287789-nviv7k7qf2pddfqh3qm70dj0nj0henna.apps.googleusercontent.com',
//     });
//   }, []);

//   const validateEmail = email => /^\S+@\S+\.\S+$/.test(email);
//   const validatePassword = password =>
//     /[A-Z]/.test(password) && password.length >= 8;

//   const handleLogin = () => {
//     let valid = true;
//     if (!validateEmail(email)) {
//       setEmailError('Enter a valid email');
//       valid = false;
//     } else setEmailError('');

//     if (!validatePassword(password)) {
//       setPasswordError(
//         'Password must be at least 8 characters and include 1 capital letter',
//       );
//       valid = false;
//     } else setPasswordError('');

//     if (valid) navigation.navigate('Verify');
//   };

//   const handleRegister = () => {
//     let valid = true;
//     if (fullName.trim().length === 0) {
//       setNameError('Full name is required');
//       valid = false;
//     } else setNameError('');

//     if (!validateEmail(email)) {
//       setEmailError('Enter a valid email');
//       valid = false;
//     } else setEmailError('');

//     if (!validatePassword(password)) {
//       setPasswordError(
//         'Password must be at least 8 characters and include 1 capital letter',
//       );
//       valid = false;
//     } else setPasswordError('');

//     if (!agreeTerms) {
//       Alert.alert('Please agree to the terms and conditions');
//       valid = false;
//     }

//     if (valid) Alert.alert(`Acount created!`);
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const {idToken} = await GoogleSignin.signIn();
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//       const userSignIn = await auth().signInWithCredential(googleCredential);
//       Alert.alert('Success', `Welcome ${userSignIn.user.displayName}`);
//       navigation.navigate('Home', {email});
//     } catch (error) {
//       console.log(error);
//       Alert.alert('Google Login Failed', error.message);
//     }
//   };

//   return (
//     <SafeAreaView style={AuthStyles.container}>
//       <View style={AuthStyles.top}>
//         <Text style={AuthStyles.welcome}>Hello, There</Text>
//         <Text style={AuthStyles.title}>Welcome Back</Text>

//         <View style={AuthStyles.toggleContainer}>
//           <Text
//             style={[AuthStyles.toggleBtn, isLogin && AuthStyles.activeBtn]}
//             onPress={() => setIsLogin(true)}>
//             Login
//           </Text>
//           <Text
//             style={[AuthStyles.toggleBtn, !isLogin && AuthStyles.activeBtn]}
//             onPress={() => setIsLogin(false)}>
//             Register
//           </Text>
//         </View>
//       </View>

//       <View style={AuthStyles.bottom}>
//         {isLogin ? (
//           <>
//             <Text style={AuthStyles.heading}>Login to Your Account</Text>
//             <Text style={AuthStyles.subText}>
//               Make sure that you already have an account
//             </Text>

//             <CustomTextInput
//               placeholder="Email"
//               icon={require('../images/email.png')}
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//               error={emailError}
//             />
//             {emailError ? (
//               <Text style={AuthStyles.errorText}>{emailError}</Text>
//             ) : null}

//             <CustomTextInput
//               placeholder="Password"
//               icon={require('../images/lock.png')}
//               value={password}
//               onChangeText={setPassword}
//               type="password"
//               error={passwordError}
//             />
//             {passwordError ? (
//               <Text style={AuthStyles.errorText}>{passwordError}</Text>
//             ) : null}

//             <View style={AuthStyles.optionsRow}>
//               <View style={AuthStyles.checkboxRow}>
//                 <CheckBox
//                   tintColors={{true: '#00c6ba', false: '#bbb'}}
//                   value={rememberMe}
//                   onValueChange={setRememberMe}
//                 />
//                 <Text style={{color: '#fff'}}>Remember me</Text>
//               </View>
//               <Text
//                 style={AuthStyles.link}
//                 onPress={() => navigation.navigate('ForgetPass')}>
//                 Forget Password?
//               </Text>
//             </View>

//             <CommonButton
//               title="Login"
//               bgColor="#00c6ba"
//               textColor="#fff"
//               onPress={handleLogin}
//             />

//             <Text style={{color: '#fff', textAlign: 'center', marginTop: 15}}>
//               OR
//             </Text>

//             <TouchableOpacity
//               onPress={handleGoogleLogin}
//               style={{
//                 backgroundColor: '#fff',
//                 paddingVertical: 12,
//                 borderRadius: 8,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginTop: 10,
//               }}>
//               <Image
//                 source={require('../images/google.png')}
//                 style={{width: 24, height: 24, marginRight: 10}}
//               />
//               <Text style={{color: '#000', fontSize: 16}}>
//                 Sign in with Google
//               </Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             <Text style={AuthStyles.heading}>Create Your Account</Text>
//             <Text style={AuthStyles.subText}>
//               Make your account keep secure
//             </Text>

//             <CustomTextInput
//               placeholder="Full Name"
//               icon={require('../images/user.png')}
//               value={fullName}
//               onChangeText={setFullName}
//               error={nameError}
//             />
//             {nameError ? (
//               <Text style={AuthStyles.errorText}>{nameError}</Text>
//             ) : null}

//             <CustomTextInput
//               placeholder="Email"
//               icon={require('../images/email.png')}
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//               error={emailError}
//             />
//             {emailError ? (
//               <Text style={AuthStyles.errorText}>{emailError}</Text>
//             ) : null}

//             <CustomTextInput
//               placeholder="Password"
//               icon={require('../images/lock.png')}
//               value={password}
//               onChangeText={setPassword}
//               type="password"
//               error={passwordError}
//             />
//             {passwordError ? (
//               <Text style={AuthStyles.errorText}>{passwordError}</Text>
//             ) : null}
//             <View style={AuthStyles.checkboxRow}>
//               <CheckBox
//                 tintColors={{true: '#00c6ba', false: '#bbb'}}
//                 value={agreeTerms}
//                 onValueChange={setAgreeTerms}
//               />
//               <Text style={{color: '#fff', flex: 1}}>
//                 I agree with the terms and conditions by creating an account
//               </Text>
//             </View>

//             <CommonButton
//               title="Create Account"
//               bgColor="#00c6ba"
//               textColor="#fff"
//               onPress={handleRegister}
//             />
//           </>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Auth;







import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../customComponents/CustomTextInput';
import CommonButton from '../customComponents/CommonButton';
import AuthStyles from '../AuthStyles';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

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
  const [modalVisible, setModalVisible] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '897459287789-nviv7k7qf2pddfqh3qm70dj0nj0henna.apps.googleusercontent.com',
    });
  }, []);

  useEffect(() => {
    if (modalVisible && timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [modalVisible, timer]);

  const validateEmail = email => /^\S+@\S+\.\S+$/.test(email);
  const validatePassword = password => /[A-Z]/.test(password) && password.length >= 8;

  const handleLogin = () => {
    let valid = true;
    if (!validateEmail(email)) {
      setEmailError('Enter a valid email');
      valid = false;
    } else setEmailError('');

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters and include 1 capital letter');
      valid = false;
    } else setPasswordError('');

    if (valid) setModalVisible(true);
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
      setPasswordError('Password must be at least 8 characters and include 1 capital letter');
      valid = false;
    } else setPasswordError('');

    if (!agreeTerms) {
      Alert.alert('Please agree to the terms and conditions');
      valid = false;
    }

    if (valid) setModalVisible(true);
  };

  const handleOtpChange = (text, index) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 5) {
      inputRefs.current[index + 1].focus()

    ;
    }
       if(index>=5){ navigation.navigate('Main',{fullName})}
  };

  return (
    <SafeAreaView style={AuthStyles.container}>
      <View style={AuthStyles.top}>
        <Text style={AuthStyles.welcome}>Hello, There</Text>
        <Text style={AuthStyles.title}>Welcome Back</Text>
        <View style={AuthStyles.toggleContainer}>
          <Text style={[AuthStyles.toggleBtn, isLogin && AuthStyles.activeBtn]} onPress={() => setIsLogin(true)}>Login</Text>
          <Text style={[AuthStyles.toggleBtn, !isLogin && AuthStyles.activeBtn]} onPress={() => setIsLogin(false)}>Register</Text>
        </View>
      </View>

      <View style={AuthStyles.bottom}>
        {/* Existing login/register form content */}
        {isLogin ? (
          <>
            <Text style={AuthStyles.heading}>Login to Your Account</Text>
            <Text style={AuthStyles.subText}>Make sure that you already have an account</Text>
            <CustomTextInput placeholder="Email" icon={require('../images/email.png')} value={email} onChangeText={setEmail} keyboardType="email-address" error={emailError} />
            {emailError ? <Text style={AuthStyles.errorText}>{emailError}</Text> : null}
            <CustomTextInput placeholder="Password" icon={require('../images/lock.png')} value={password} onChangeText={setPassword} type="password" error={passwordError} />
            {passwordError ? <Text style={AuthStyles.errorText}>{passwordError}</Text> : null}
            <View style={AuthStyles.optionsRow}>
              <View style={AuthStyles.checkboxRow}>
                <CheckBox tintColors={{true: '#00c6ba', false: '#bbb'}} value={rememberMe} onValueChange={setRememberMe} />
                <Text style={{color: '#fff'}}>Remember me</Text>
              </View>
              <Text style={AuthStyles.link} onPress={() => navigation.navigate('ForgetPass')}>Forget Password?</Text>
            </View>
            <CommonButton title="Login" bgColor="#00c6ba" textColor="#fff" onPress={handleLogin} />
          </>
        ) : (
          <>
            <Text style={AuthStyles.heading}>Create Your Account</Text>
            <Text style={AuthStyles.subText}>Make your account keep secure</Text>
            <CustomTextInput placeholder="Full Name" icon={require('../images/user.png')} value={fullName} onChangeText={setFullName} error={nameError} />
            {nameError ? <Text style={AuthStyles.errorText}>{nameError}</Text> : null}
            <CustomTextInput placeholder="Email" icon={require('../images/email.png')} value={email} onChangeText={setEmail} keyboardType="email-address" error={emailError} />
            {emailError ? <Text style={AuthStyles.errorText}>{emailError}</Text> : null}
            <CustomTextInput placeholder="Password" icon={require('../images/lock.png')} value={password} onChangeText={setPassword} type="password" error={passwordError} />
            {passwordError ? <Text style={AuthStyles.errorText}>{passwordError}</Text> : null}
            <View style={AuthStyles.checkboxRow}>
              <CheckBox tintColors={{true: '#00c6ba', false: '#bbb'}} value={agreeTerms} onValueChange={setAgreeTerms} />
              <Text style={{color: '#fff', flex: 1}}>I agree with the terms and conditions by creating an account</Text>
            </View>
            <CommonButton title="Create Account" bgColor="#00c6ba" textColor="#fff" onPress={handleRegister} />
          </>
        )}
      </View>

      {/* Modal Verify Card */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={modalStyles.overlay}>
          <View style={modalStyles.card}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={modalStyles.backBtn}>
              <Image source={require('../images/back.png')} style={{width: 24, height: 24, tintColor: '#fff'}} />
            </TouchableOpacity>
            <Text style={modalStyles.heading}>Verify Your Account</Text>
            <View style={modalStyles.avatar}><Image source={require('../images/profile.png')} style={{width: 60, height: 60}} /></View>
            <Text style={modalStyles.name}>{fullName}</Text>
            <Text style={modalStyles.email}>{email}</Text>
            <View style={modalStyles.infoBox}>
              <Image source={require('../images/warn.png')} style={{width: 20, height: 20}} />
              <Text style={modalStyles.infoText}>We have sent you a 6 digits verification code to your email. Kindly check.</Text>
            </View>
            <Text style={modalStyles.timer}>00:{timer < 10 ? `0${timer}` : timer}</Text>
            <View style={modalStyles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={modalStyles.otpInput}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={text => handleOtpChange(text, index)}
                  ref={ref => (inputRefs.current[index] = ref)}
                />
              ))}
            </View>
            <View style={modalStyles.resendContainer}>
              <Text style={modalStyles.resendText}>Didn’t receive OTP? </Text>
              <TouchableOpacity onPress={() => setTimer(60)}>
                <Text style={modalStyles.resendLink}>Resend</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: '#1f1f1f',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  backBtn: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatar: {
    backgroundColor: '#d0f0ec',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  name: { color: 'white', fontSize: 17, fontWeight: '600' },
  email: { color: 'gray', fontSize: 14, marginBottom: 20 },
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
  resendText: { color: 'gray' },
  resendLink: { color: '#00c6ba', fontWeight: 'bold' },
});

export default Auth;

// import React, { useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   SafeAreaView,
//   Alert,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const BiometricLogin = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     // Simulate fingerprint prompt
//     setTimeout(() => {
//       Alert.alert('Fingerprint Recognized', 'Welcome back!');
//       navigation.navigate('Home'); // Navigate to home/dashboard
//     }, 2000);
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <Image
//           source={require('../images/BioCircle.png')} // your fingerprint image
//           style={styles.image}
//           resizeMode="contain"
//         />
//         <Text style={styles.title}>Touch ID</Text>
//         <Text style={styles.subtitle}>
//           Use fingerprint to access your account
//         </Text>

//         <TouchableOpacity
//          onPress={() =>   navigation.navigate('Auth')
//         }
//             >
//           <Text style={styles.skipText}>Cancel and login manually</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default BiometricLogin;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//   },
//   content: {
//     alignItems: 'center',
//     paddingHorizontal: 30,
//   },
//   image: {
//     width: 130,
//     height: 130,
//     marginBottom: 30,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   subtitle: {
//     color: '#aaa',
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   skipText: {
//     color: '#00c6ba',
//     fontSize: 15,
//     textDecorationLine: 'underline',
//   },
// });

// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   SafeAreaView,
//   Animated,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import ReactNativeBiometrics from 'react-native-biometrics';

// const BiometricLogin = () => {
//   const navigation = useNavigation();
//   const [authError, setAuthError] = useState('');
//   const scaleAnim = new Animated.Value(1);

//   const animateFinger = (success = true) => {
//     Animated.sequence([
//       Animated.timing(scaleAnim, {
//         toValue: 0.9,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(scaleAnim, {
//         toValue: 1,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//     ]).start(() => {
//       if (success) {
//         navigation.navigate('Home');
//       }
//     });
//   };

//   const authenticateBiometric = async () => {
//     const rnBiometrics = new ReactNativeBiometrics();

//     const { available, biometryType } = await rnBiometrics.isSensorAvailable();

//     if (!available) {
//       setAuthError('Biometric sensor not available on this device');
//       return;
//     }

//     rnBiometrics
//       .simplePrompt({ promptMessage: 'Confirm fingerprint' })
//       .then(resultObject => {
//         const { success } = resultObject;

//         if (success) {
//           setAuthError('');
//           animateFinger(true);
//         } else {
//           setAuthError('Fingerprint not recognized. Try again.');
//           animateFinger(false);
//         }
//       })
//       .catch(() => {
//         setAuthError('Authentication failed. Try again.');
//         animateFinger(false);
//       });
//   };

//   useEffect(() => {
//     authenticateBiometric();
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <Animated.Image
//           source={require('../images/BioCircle.png')}
//           style={[styles.image, { transform: [{ scale: scaleAnim }] }]}
//           resizeMode="contain"
//         />
//         <Text style={styles.title}>Touch ID</Text>
//         <Text style={styles.subtitle}>
//           Use fingerprint to access your account
//         </Text>

//         {authError !== '' && <Text style={styles.error}>{authError}</Text>}

//         <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
//           <Text style={styles.skipText}>Cancel and login manually</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default BiometricLogin;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//   },
//   content: {
//     alignItems: 'center',
//     paddingHorizontal: 30,
//   },
//   image: {
//     width: 130,
//     height: 130,
//     marginBottom: 30,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   subtitle: {
//     color: '#aaa',
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   skipText: {
//     color: '#00c6ba',
//     fontSize: 15,
//     textDecorationLine: 'underline',
//     marginTop: 25,
//   },
//   error: {
//     color: 'red',
//     fontSize: 14,
//     marginTop: 10,
//     textAlign: 'center',
//   },
// });

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ReactNativeBiometrics from 'react-native-biometrics';

const BiometricLogin = () => {
  const navigation = useNavigation();
  const [authError, setAuthError] = useState('');
  const scaleAnim = useState(new Animated.Value(1))[0];
  const pulseAnim = useState(new Animated.Value(1))[0];

  useEffect(() => {
    animatePulse();
    authenticateBiometric();
  }, []);

  const animatePulse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const animateFinger = (success = true) => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (success) {
        navigation.navigate('Verify');
      }
    });
  };

  const authenticateBiometric = async () => {
    const rnBiometrics = new ReactNativeBiometrics();
    const {available} = await rnBiometrics.isSensorAvailable();

    if (!available) {
      setAuthError('Biometric sensor not available on this device');
      return;
    }

    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then(resultObject => {
        const {success} = resultObject;
        if (success) {
          setAuthError('');
          animateFinger(true);
        } else {
          setAuthError('Fingerprint not recognized. Try again.');
          animateFinger(false);
        }
      })
      .catch(() => {
        setAuthError('Authentication failed. Try again.');
        animateFinger(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.fingerprintContainer}>
          <Animated.View
            style={[
              styles.pulseCircle,
              {
                transform: [{scale: pulseAnim}],
                opacity: pulseAnim.interpolate({
                  inputRange: [1, 1.5],
                  outputRange: [0.5, 0],
                }),
              },
            ]}
          />
          <Animated.Image
            source={require('../images/BioCircle.png')}
            style={[styles.image, {transform: [{scale: scaleAnim}]}]}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>Touch ID</Text>
        <Text style={styles.subtitle}>
          Use fingerprint to access your account
        </Text>

        {authError !== '' && <Text style={styles.error}>{authError}</Text>}

        <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
          <Text style={styles.skipText}>Cancel and login manually</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BiometricLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  fingerprintContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 160,
    marginBottom: 30,
  },
  pulseCircle: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#00c6ba',
    zIndex: -1,
  },
  image: {
    width: 130,
    height: 130,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  skipText: {
    color: '#00c6ba',
    fontSize: 15,
    textDecorationLine: 'underline',
    marginTop: 25,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});

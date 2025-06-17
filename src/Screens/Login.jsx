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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const Login = ({onSwitch}) => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.welcome}>Hello, There</Text>
        <Text style={styles.title}>Welcome Back</Text>

        <View style={styles.toggleContainer}>
          <TouchableOpacity style={[styles.toggleBtn, styles.activeBtn]}>
            <Text style={[styles.toggleText, styles.activeText]}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.toggleBtn}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={styles.toggleText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.heading}>Login to Your Account</Text>
        <Text style={styles.subText}>
          Make sure that you already have an account
        </Text>

        <View style={styles.inputWrapper}>
          <Image
            style={{height: 24, width: 24}}
            source={require('../images/email.png')}
          />
          <TextInput placeholder="Email" style={styles.input} />
        </View>

        <View style={styles.inputWrapper}>
          <Image
            style={{height: 24, width: 24}}
            source={require('../images/lock.png')}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
          <Image
            style={{height: 24, width: 24}}
            source={require('../images/view.png')}
          />
        </View>

        <View style={styles.optionsRow}>
          <View style={styles.checkboxRow}>
            <CheckBox value={rememberMe} onValueChange={setRememberMe} />
            <Text style={{color: '#fff'}}>Remember me</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgetPass');
            }}>
            <Text style={styles.link}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Verify');
          }}
          style={styles.actionBtn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#028d85'},
  top: {alignItems: 'center', paddingVertical: 30},
  welcome: {fontSize: 16, color: 'white'},
  title: {fontSize: 22, fontWeight: 'bold', color: 'white', marginVertical: 10},
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#1ca69c',
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 15,
  },
  toggleBtn: {
    width: width * 0.4,
    padding: 10,
    alignItems: 'center',
  },
  toggleText: {color: 'white', fontSize: 16},
  activeBtn: {backgroundColor: 'white'},
  activeText: {color: '#028d85', fontWeight: 'bold'},
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
  checkboxRow: {flexDirection: 'row', alignItems: 'center', gap: 5},
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
});

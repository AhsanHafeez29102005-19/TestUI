import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const AuthStyles = StyleSheet.create({
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
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    borderRadius: 25,
  },
  activeBtn: {
    backgroundColor: 'white',
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
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    gap: 5,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  link: {color: '#00c6ba', fontWeight: '500'},
  errorText: {color: 'red', marginTop: 5, marginLeft: 20},
});

export default AuthStyles;

// import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
// import React from 'react'

// const CustomTextInput = (value,onChangeText,placeholder,icon,type) => {
//   return (
//     <View style={{width:'85%',height:50,borderWidth:1,borderRadius:10,alignSelf:'center',marginTop:30,
//         flexDirection:'row',alignItems:'center',paddingLeft:20, paddingRight:20
//     }} >  
//     <Image source={icon} style={{width:24, height:24}}/>
//     <TextInput placeholder={placeholder} style={{marginLeft:10}} keyboardType={type?type:'default'}/>
//     </View>
//   )
// }

// export default CustomTextInput

// const styles = StyleSheet.create({})


import { Image, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

const CustomTextInput = ({ value, onChangeText, placeholder, icon, type, keyboardType }) => {
  return (
    <View style={styles.inputContainer}>
      {icon && <Image source={icon} style={styles.icon} />}
      <TextInput 
        placeholder={placeholder} 
        style={styles.input} 
        value={value} 
        onChangeText={onChangeText} 
        secureTextEntry={type? true:false}
        keyboardType={keyboardType?keyboardType:'default'}      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: '85%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
});

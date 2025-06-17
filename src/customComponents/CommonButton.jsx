// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'

// const CommonButton = (onPress, title, bgColor,textColor) => {
//     return (
//         <TouchableOpacity style=
//         {{ backgroundColor: bgColor, justifyContent: 'center', alignItems: 'center', }} onPress={()=>
//         {
//             onPress
//         }
//         }>
//             <Text style={{color:textColor,}}>{title}</Text> 
//         </TouchableOpacity>
//     )
// }

// export default CommonButton

// const styles = StyleSheet.create({})

import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CommonButton = ({ onPress, title, bgColor, textColor }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={onPress} // Corrected this line
      activeOpacity={0.7}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text> 
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  button: {
    width: '85%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

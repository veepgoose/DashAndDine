import React, { useState } from 'react';
import { View, Text, TextInput,image, Button, StyleSheet } from 'react-native';
import Logo from '../../assets/logo.png';


function Homepage() {
    // Your component code here
  
    return (
      <View style={styles.container}>
        {/* Your login form and UI elements */}
        <Text style={styles.text}>Hello World!...again</Text>
        <Image source={Logo} style={styles.logo} />
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#C6F91F',
      fontSize: 20,

    },
    logo: {
      width: 200,
      height: 200,
    },
  });
  

  export default Homepage;

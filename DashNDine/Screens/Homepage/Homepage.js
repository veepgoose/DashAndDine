import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


function Homepage() {
    // Your component code here
  
    return (
      <View style={styles.container}>
        {/* Your login form and UI elements */}
        <p style={{color:'#C6F91F'}}>Hello World!...again</p>
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    // Define your styles here
  });
  

  export default Homepage;

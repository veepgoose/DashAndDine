import React, { useState } from 'react';
import { View, Text, TextInput,Image, Button, StyleSheet, Touchable } from 'react-native';
import Logo from '../../assets/logo.png';
import { TouchableOpacity } from 'react-native-web';




function Homepage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
    return (
      <View style={styles.container}>
       
        {/* <Text style={styles.text}>Hello World!...again</Text> */}
        <Image source={Logo} style={styles.logo} />

        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
          selectionColor="transparent"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TouchableOpacity
        style={styles.button}
         onPress={() => {
            console.log('Username;', username);
            console.log('Password:', password);   

         }}
        >
        ,<Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
         
          
                
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

    input: {
      width: 200,
      height: 40,
      borderWidth: 1,
      borderColor: '#C6F91F',
      backgroundColor: '#36413E',
      color: '#4DD8FF',
      marginBottom: 20,
      paddingLeft: 10,
    },

    buttonText: {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      paddingTop: 5,
      color: '#36413E',
      backgroundColor: '#4DD8FF',
      width: 80,
      height: 30,
      fontSize: 15,
      fontWeight: 'bold',
      elevation: 5,
      shadowColor: '#36413E',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 3.84,
      

      
      
      
      
      

      

    },

  

  });
 


  export default Homepage;
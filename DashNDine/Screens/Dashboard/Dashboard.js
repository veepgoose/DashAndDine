import React, { useState } from 'react';
import { View, Text, TextInput,Image, Button, StyleSheet, Touchable } from 'react-native';
import Logo from '../../assets/logo.png';
import { TouchableOpacity } from 'react-native-web';
import ProfilePic from '../../assets/Goose.jpg';

function Dashboard ()   {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World!...again</Text>
            <Image source={Logo} style={styles.logo} />
            <Image source={ProfilePic} style={styles.profilePic} />
            
        </View>
    )
}
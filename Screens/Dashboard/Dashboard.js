import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
  Touchable,
} from "react-native";
import Goose from "/Images/Goose.jpg";
import { TouchableOpacity } from "react-native-web";
import ProfilePic from "/Images/Goose.jpg";

function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Goose Squad</Text>
      <Image source={Goose} style={styles.logo} />
      <Image source={ProfilePic} style={styles.profilePic} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#C6F91F",
    fontSize: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#C6F91F",
    backgroundColor: "#36413E",
    color: "#4DD8FF",
    marginBottom: 20,
    paddingLeft: 10,
  },

  buttonText: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 5,
    color: "#36413E",
    backgroundColor: "#4DD8FF",
    width: 80,
    height: 30,
    fontSize: 15,
    fontWeight: "bold",
    elevation: 5,
    shadowColor: "#36413E",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
  },

  container: {
    flex: 1,
    backgroundColor: "#5D5E60",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Dashboard;

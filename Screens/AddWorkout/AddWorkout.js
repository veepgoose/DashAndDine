import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function AddWorkout({ navigation }) {
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const handleAddWorkout = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Add Workout</Text>
      <TextInput
        placeholder="Workout Type"
        value={workoutType}
        onChangeText={setWorkoutType}
      />
      <TextInput
        placeholder="Duration"
        value={duration}
        onChangeText={setDuration}
      />
      <TextInput placeholder="Date" value={date} onChangeText={setDate} />
      <Button title="Save Workout" onPress={handleAddWorkout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddWorkout;

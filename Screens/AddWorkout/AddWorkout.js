import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "react-native-web";

// Define the workoutTypes array with options
const workoutTypes = ["Select", "Running", "Walking", "Yoga", "Jiu-Jitsu"];

const workoutTypesAbc = workoutTypes.slice(1).sort();
// created a variable to ensure that workout types are automatically sorted alphabetically
workoutTypesAbc.unshift("Select");
// still wanted Select to be on the top of the pile

function AddWorkout({ navigation }) {
  const [workoutType, setWorkoutType] = useState("Select");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const handleAddWorkout = () => {
    if (workoutType !== "Select") {
      // added an if stamtent to ensure that the user selects a workout type
      navigation.goBack();
    } else {
      alert("Please select a workout type");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Add Workout</Text>
      <Picker
        selectedValue={workoutType}
        onValueChange={(itemValue, itemIndex) => setWorkoutType(itemValue)}
      >
        {workoutTypes.map((type, index) => (
          <Picker.Item key={index} label={type} value={type} />
        ))}
      </Picker>

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

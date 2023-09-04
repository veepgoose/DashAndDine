import { StyleSheet, Text, View } from "react-native";
import Homepage from "./Screens/Homepage/Homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./Screens/Dashboard/Dashboard";
import AddWorkout from "./Screens/AddWorkout/AddWorkout";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AddWorkout" component={AddWorkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D5E60",
    alignItems: "center",
    justifyContent: "center",
  },
});

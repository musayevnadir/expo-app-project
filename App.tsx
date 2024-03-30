/** @format */
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { MainScreen } from "./src/screens/MainScreen";

// ! Component

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <MainScreen />
    </SafeAreaView>
  );
}

// ! Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e90ff",
  },
});

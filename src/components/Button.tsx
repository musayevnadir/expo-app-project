/** @format */
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

// ! Interface

interface IButton {
  text?: string;
  onPress?: () => void;
}

// ! Component

export const Button: React.FC<IButton> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

// ! Styles

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#adff2f",
    borderWidth: 2,
    borderColor: "#4b0082",
  },
});

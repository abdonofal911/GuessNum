import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: "white",
  },
});

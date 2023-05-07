import React from "react";
import { StyleSheet, Text, View  , Platform} from "react-native";
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
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderColor: "white",
    maxWidth : '75%',
    width : 300
  },
});

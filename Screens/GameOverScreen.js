import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Title from "../Components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../Components/ui/PrimartButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over Screen</Title>
      <View style={styles.ImageContainer}>
        <Image style={styles.Image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        {" "}
        Your Phone needed <Text style={styles.highLight}>
          {roundsNumber}
        </Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highLight}>{userNumber}</Text>{" "}
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start a New Game </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;
const styles = StyleSheet.create({
  ImageContainer: {
    borderRadius: 200,
    width: 400,
    height: 400,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  highLight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
});

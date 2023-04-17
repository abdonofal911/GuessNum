import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Title from "../Components/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess </Title>
      <View>
        <Text>Higher or Lower ?</Text>
        <Text>Rounds Log</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

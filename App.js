import { useState } from "react";
import StartGameScreen from "./Screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./Screens/GameScreen";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

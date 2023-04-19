import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert } from "react-native";
import PrimaryButton from "../Components/ui/PrimartButton";
import Colors from "../constants/Colors";
import Title from "../Components/ui/Title";
import Card from "../Components/ui/Card";
import InstructionText from "../Components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "invalid Number",
        "Number has to be a Number between 1 - 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };
  return ( <View style={styles.rootContainer}>
    <Title>Guess My Number</Title>
    <Card>
    <InstructionText style={styles.instructionText}>Enter a Random Number</InstructionText>
      <TextInput
        style={styles.numberInput}
        placeholder="Add"
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
 
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  
  buttonsContainer: {
    flexDirection: "row",
  },
  numberInput: {
    height: 50,
    borderBottomColor: Colors.accent500,
    fontSize: 32,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  rootContainer:{
    flex : 1 , 
    marginTop : 100 , alignItems : 'center'
  },
  instructionText:{
marginBottom:12 
  }
});

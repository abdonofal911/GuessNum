import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput,Dimensions, Button, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../Components/ui/PrimartButton";
import Colors from "../constants/Colors";
import Title from "../Components/ui/Title";
import Card from "../Components/ui/Card";
import InstructionText from "../Components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const {height , width} = useWindowDimensions();
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

  const marginTopDistance = height< 380 ? 30 : 100 ; 
  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
    <View style={[styles.rootContainer , {marginTop : marginTopDistance}]}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText style={styles.instructionText}>
          Enter a Random Number
        </InstructionText>
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
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const deviceHeight = Dimensions.get('window').height


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
  rootContainer: {
    flex: 1,
    marginTop: deviceHeight< 380 ? 30 : 100,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  screen : {
    flex: 1
  }
});

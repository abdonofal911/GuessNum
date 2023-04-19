import { Text, View , StyleSheet } from "react-native"
import Colors from "../../constants/Colors"

const InstructionText = () => {
  return (
    <Text style={styles.instructionText}>Enter a Random Number</Text>

  )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText:{
        color : Colors.accent500 , 
        fontSize : 24 ,  
      }
})

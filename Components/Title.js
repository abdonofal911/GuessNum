import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = ({children}) => {
  return (

    <Text style={styles.title}>{children}</Text>

  )
}

export default Title 

const styles = StyleSheet.create({
    title : {
        fontSize: 24 , 
        fontWeight : 'bold' ,
         color : '#ddb52f' , 
         textAlign : 'center', 
         padding :12  , 
         borderWidth : 2 ,
         borderColor : '#ddb52f'
      }
})

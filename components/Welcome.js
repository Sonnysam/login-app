import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View>
      <Text style={styles.welcome}>Welcome to Our App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 7,
    fontWeight: 'bold',
  }
})
import { StyleSheet, Text, View, Linking } from 'react-native'
import React from 'react'

export default function Love() {
  return (
    <View style={styles.container}>
      <Text style={styles.love}>
        Built with ❤ by{" "}
        <Text
          style={[styles.acc, styles.link]}
          onPress={() =>
            Linking.openURL("https://github.com/Sonnysam")
          }
        >
          Samuel Agbenyo
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
  },
  love: {
    fontSize: 10,
  },
  link:{
    color: "lightblue",
  },
});
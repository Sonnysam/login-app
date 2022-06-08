import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";


export default function Input() {
  return (
    <KeyboardAvoidingView style={styles.inputGroup}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => {}}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => {}}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => {}}
          secureTextEntry
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    },
    container: {
        // backgroundColor: "tomato",
        width: "80%",
        padding: 5,
    },
    input: {    
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5,
        fontSize: 18,
        borderRadius: 20,
    },
});

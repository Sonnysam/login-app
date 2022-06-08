import { StyleSheet, View } from "react-native";
import Dont from "./components/Dont";
import Input from "./components/Input";
import Logo from "./components/Logo";
import Love from "./components/Love";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Welcome />
      <Input />
      <SignUp />
      <Dont />
      <Love />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});

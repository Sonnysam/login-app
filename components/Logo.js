import { StyleSheet, View, Image } from 'react-native'

export default function Logo() {
  return (
    <View style={styles.img}>
      <Image
        source={require("../assets/reg.png")}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    paddingTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
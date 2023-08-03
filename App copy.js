import { StatusBar } from "expo-status-bar";
import {
  Button,
  Dimensions,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

/*
 <div>   : <View>
 <p>     : <Text>
 <img>   : <Image>
 <a>     : <Link> (Expo router), Linking.openURL(url);
 <ul>    : <FlatList>
<input>  : <TextInput>
<button> : <Button>, <TouchableOpacity>, <Pressable>
<div>    : <ScrollView>
CSS      : StyleSheet API
CSS safe-area-inset : SafeAreaView
CSS animations : Animated API, Reanimated
CSS flexbox : Flexbox
CSS media queries : Dimensions API
CSS position : Absolute, Relative
CSS background-image : ImageBackground

*/
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text>Open up App.js to start working on your app!</Text>
      <Button title="Click me" onPress={() => alert("Button clicked")} />
      <Pressable onPress={console.log} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Click me</Text>
      </Pressable> */}
      {/* <View style={styles.box}></View> */}
      <ImageBackground
        style={styles.helloImage}
        source={{ uri: "https://picsum.photos/200/300" }}
      >
        <Text style={styles.helloText}>Merhaba BursaBilisim</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  buttonContainer: {
    backgroundColor: "tomato",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: { color: "white", fontSize: 16 },
  box: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").width / 2,
    backgroundColor: "dodgerblue",
    borderWidth: 20,
  },
  helloImage: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  helloText: {
    fontSize: 24,
    color: "white",
  },
});

import React, { memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import logo from "../../assets/logo.png";
import illustration from "../../assets/startscreen.png";
import { Button } from "../../components";
import { Link } from "expo-router";


// StartScreen component
const StartScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.main}>
        <Image source={logo} style={styles.logo} />
        <Image source={illustration} style={styles.illustration} />
        <Text style={styles.startText}>No stress with money</Text>
        <Link href={"/HomeScreen"} asChild>
          <Button outline>Login</Button>
        </Link>
        <Link href={"/RegisterScreen"} asChild>
          <Button>Get Started</Button>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 24,
  },
  main: {
    alignItems: "center",
    marginTop: 24,
    width: "100%",
    gap: 24,
  },
  startText: {
    fontSize: 24,
    color: "#3e3d77",
    fontWeight: "bold",
    marginTop: 24,
  },
});

export default memo(StartScreen);

import React, { memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import logo from "../assets/logo.png";
import illustration from "../assets/startscreen.png";
import { Button, Background } from "./../components";

const StartScreen = () => {
  return (
    <Background>
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.main}>
          <Image source={logo} />
          <Image source={illustration} />
          <Text style={styles.start_text}>No stress with money</Text>
          <Button outline>Login</Button>
          <Button>Get Started</Button>
        </View>
      </KeyboardAvoidingView>
    </Background>
  );
};

const styles = StyleSheet.create({
  background: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    width: "100%",
  },
  start_text: {
    fontSize: 24,
    color: "#3e3d77",
    fontWeight: "bold",
  },
});

export default memo(StartScreen);

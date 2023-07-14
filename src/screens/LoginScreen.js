import React, { memo } from "react";
import { KeyboardAvoidingView, View, Text, StyleSheet } from "react-native";
import {
  Back,
  Background,
  Button,
  Header,
  Input,
  PinInput,
} from "../components";

const LoginScreen = () => {
  return (
    <Background>
      <KeyboardAvoidingView>
        <Back />
        <Header
          heading={"Welcome Back"}
          subHeading={"Enter your details to login"}
        />
        <Input label={"Phone Number"} placeholder={"+2348162060070"} />
        <PinInput label={"Enter your 4 digit PIN"} />
        <Button margin>Login</Button>
        <View style={styles.forgot_pin}>
          <Text style={styles.forgot_pin_text}>Forgot PIN?</Text>
        </View>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default memo(LoginScreen);

const styles = StyleSheet.create({
  forgot_pin: {
    width: "100%",
  },
  forgot_pin_text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#3e3d77"
  },
});

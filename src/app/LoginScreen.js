import React, { memo } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
} from "react-native";
import { Back, Button, Header, Input, PinInput } from "../components";
import { Link } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginScreen = () => {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Back />
          <Header
            heading={"Welcome Back"}
            subHeading={"Enter your details to login"}
          />
          <Input
            label={"Phone Number"}
            placeholder={"+2348162060070"}
            type="telephoneNumber"
            keyboardType="numeric"
          />
          <PinInput label={"Enter your 4 digit PIN"} />
          <Link href={"/HomeScreen"} asChild>
            <Button margin>Login</Button>
          </Link>
          <View style={styles.forgot_pin}>
            <Text style={styles.forgot_pin_text}>{"Forgot PIN ?"}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default memo(LoginScreen);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
  },
  forgot_pin: {
    width: "100%",
  },
  forgot_pin_text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#3e3d77",
  },
});

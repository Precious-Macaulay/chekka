import React, { memo } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { Back, Button, Header, Input } from "../components";
import { Link } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// RegisterScreen component
const RegisterScreen = () => {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Back />
          <Header
            heading={"Get Started"}
            subHeading={"Let's get to know you"}
          />
          <Input
            label={"Phone Number"}
            placeholder={"+2348162060070"}
            type="telephoneNumber"
            keyboardType="numeric"
          />
          <Input label={"First Name"} placeholder={"John"} />
          <Input label={"Last Name"} placeholder={"Peters"} />
          <Input label={"Business Name"} placeholder={"Okara Enterprise"} />
          <Link href={"/OTPScreen"} asChild>
            <Button margin>Next</Button>
          </Link>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
  },
});

export default memo(RegisterScreen);

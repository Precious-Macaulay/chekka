import React, { memo } from "react";
import { Back, Button, Header, PinInput } from "../components";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Link } from "expo-router";

const OTPScreen = () => {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Back />
          <Header
            heading={"Enter you OTP"}
            subHeading={
              "Input the otp sent to your phone number to proceed to account creation "
            }
          />
          <PinInput margin />
          <Link href={"/PINScreen"} asChild>
            <Button>Next</Button>
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

export default memo(OTPScreen);

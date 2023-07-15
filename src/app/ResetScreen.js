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

const ResetScreen = () => {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Back />
          <Header
            heading={"Reset your 4 digit PIN"}
            subHeading={
              "Please enter the phone number to the account to recieve reset link"
            }
          />
          <Input
            label={"Phone Number"}
            placeholder={"+2348162060070"}
            type="telephoneNumber"
            keyboardType="numeric"
          />
          <Link href={"/OTPScreen"} asChild>
            <Button margin>Reset</Button>
          </Link>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default memo(ResetScreen);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
  },
});

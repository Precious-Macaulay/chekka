import React, { memo } from "react";
import { KeyboardAvoidingView} from "react-native";
import {
  Back,
  Background,
  Button,
  Header,
  Input,
} from "../components";

const ResetScreen = () => {
  return (
    <Background>
      <KeyboardAvoidingView>
        <Back />
        <Header
          heading={"Reset your 4 digit PIN"}
          subHeading={
            "Please enter the phone number to the account to recieve reset link"
          }
        />
        <Input label={"Phone Number"} placeholder={"+2348162060070"} />
        <Button margin>Reset</Button>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default memo(ResetScreen);

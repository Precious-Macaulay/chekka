import React, { memo } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Back, Background, Button, Header, Input } from "../components";

const RegisterScreen = () => {
  return (
    <Background>
      <KeyboardAvoidingView>
        <Back />
        <Header heading={"Get Started"} subHeading={"Let get to know you"} />
        <Input label={"Phone Number"} placeholder={"+2348162060070"} />
        <Input label={"First Name"} placeholder={"John"} />
        <Input label={"Last Name"} placeholder={"Peters"} />
        <Input label={"Business Name"} placeholder={"Okara Enterprise"} />
        <Button margin>Next</Button>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default memo(RegisterScreen);

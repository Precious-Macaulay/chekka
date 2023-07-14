import React, { memo } from "react";
import { Back, Background, Button, Header, PinInput } from "../components";

const OTPScreen = () => {
  return (
    <Background>
      <Back />
      <Header
        heading={"Enter you OTP"}
        subHeading={
          "Input the otp sent to your phone number to proceed to account creation "
        }
      />
      <PinInput margin />
      <Button>Next</Button>
    </Background>
  );
};

export default memo(OTPScreen);

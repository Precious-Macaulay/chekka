import React, { memo } from "react";
import { Back, Background, Button, Header, PinInput } from "../components";

const PINScreen = () => {
  return (
    <Background>
      <Back />
      <Header
        heading={"Create New PIN"}
        subHeading={"Create a new 4 digit pin for signing into your account"}
      />
      <PinInput margin />
      <Button>Create</Button>
    </Background>
  );
};

export default memo(PINScreen);

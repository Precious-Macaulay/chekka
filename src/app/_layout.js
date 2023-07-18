import React from "react";
import { Stack } from "expo-router";
import { Provider } from "../contexts/auth";

export const unstable_settings = {
  initialRouteName: "index",
};

// Layout component
export default function Layout() {
  return (
    <Provider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </Provider>
  );
}

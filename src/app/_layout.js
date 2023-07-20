// Layout.js
import React, { useEffect, useState } from "react";
import { Slot, Stack } from "expo-router";
import { AuthProvider } from "../contexts/auth";

// Layout component
export default function Layout() {
  const [isMounted, setIsMounted] = useState(false);
 
  // Set isMounted to true after the component has been mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return null if the component is not mounted yet
  if (!isMounted) {
    return null;
  }

  return (
    <AuthProvider>
        <Slot>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </Slot>
    </AuthProvider>
  );
}

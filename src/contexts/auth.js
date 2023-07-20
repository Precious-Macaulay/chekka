import { router, useSegments } from "expo-router";
import React, { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function useProtectedRoute(user) {
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      router.replace("/LoginScreen");
    } else if (user && inAuthGroup) {
      router.replace("/HomeScreen");
    }
  }, [user, segments]);
}

export function AuthProvider({ children }) {
  const [user, setAuth] = useState(null);
  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: (token) => setAuth({ token: token }),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

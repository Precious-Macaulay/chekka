import { router, useSegments } from "expo-router";
import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);

// This hook can be used to access the user info.
export function useAuth() {
  return useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user) {
  const segments = useSegments();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/HomeScreen");
    }
  }, [user, segments]);
}

export function Provider(props) {
  const [user, setAuth] = useState(null);
  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: (token) => setAuth({ token }),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

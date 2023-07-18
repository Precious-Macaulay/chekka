import AsyncStorage from "@react-native-async-storage/async-storage";

const saveTokenToStorage = async (token) => {
  try {
    await AsyncStorage.setItem("jwtToken", token);
    console.log("Token saved successfully.");
  } catch (error) {
    console.log("Error saving token:", error);
  }
};

const getTokenFromStorage = async () => {
  try {
    const token = await AsyncStorage.getItem("jwtToken");
    return token;
  } catch (error) {
    console.log("Error retrieving token:", error);
    return null;
  }
};

export default { saveTokenToStorage, getTokenFromStorage };

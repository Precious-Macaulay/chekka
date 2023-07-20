import { MonoProvider } from "@mono.co/connect-react-native";
import { useAuth } from "../../contexts/auth";
import axios from "axios";
import API_BASE_URL from "../../constants/index";
import { router, Slot } from "expo-router";

export default function AppLayout() {
  const { user } = useAuth();
  const getAcountID = async (code) => {
    try {
      if (!user || !user.token) {
        console.error("User or token is not available.");
        return;
      }

      const response = await axios.post(
        `${API_BASE_URL}/monoauth`,
        {
          code: code,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      return response.data.success;
    } catch (error) {
      console.log(error);
    }
  };

  const config = {
    publicKey: "test_pk_chudzekce5tn6w5htx11",
    onClose: () => console.log("Widget closed"),
    onSuccess: async (data) => {
      const code = data.getAuthCode();
      const response = await getAcountID(code);
      response ? router.replace("/HomeScreen") : console.log(response);
    },
  };

  return (
    <MonoProvider {...config}>
      <Slot />
    </MonoProvider>
  );
}

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./styles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "../pages/Home";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WeatherDetails from "../../components/WeatherDetails";

function Home() {
  return (
    <View>
      <WeatherDetails />
    </View>
  );
}

export default Home;

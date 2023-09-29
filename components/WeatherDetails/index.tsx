import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function WeatherDetails() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[{ paddingTop: insets.top }]}>
      <Text>28.4 C</Text>
    </View>
  );
}

export default WeatherDetails;

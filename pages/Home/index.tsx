import { ScrollView, View } from "react-native";
import { IconButton } from "@react-native-material/core";
import WeatherDetails from "../../components/WeatherDetails";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MUIcon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./styles";

function Home() {
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={[
        { paddingTop: safeAreaInsets.top * 2 },
        styles.pageContainer,
      ]}
    >
      <WeatherDetails />
      <IconButton
        icon={<MUIcon name="plus" style={styles.floatingIconBtnIcon} />}
        style={styles.floatingIconBtn}
      />
    </ScrollView>
  );
}

export default Home;

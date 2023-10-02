import { View } from "react-native";
import { IconButton } from "@react-native-material/core";
import WeatherDetails from "../../components/WeatherDetails";
import MUIcon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./styles";

function Home() {
  return (
    <>
      <WeatherDetails />
      <IconButton
        icon={<MUIcon name="plus" style={styles.floatingIconBtnIcon} />}
        style={styles.floatingIconBtn}
      />
    </>
  );
}

export default Home;

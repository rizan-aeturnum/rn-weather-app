import { ScrollView, View } from "react-native";
import { IconButton } from "@react-native-material/core";
import WeatherDetails from "../../components/WeatherDetails";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MUIcon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import AddCityModal from "./AddCityModal";
import { useState } from "react";

function Home() {
  const [showAddCityModal, setShowAddCityModal] = useState<boolean>(false);
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
        onPress={() => setShowAddCityModal(true)}
      />
      <AddCityModal
        isVisible={showAddCityModal}
        onModalClose={() => setShowAddCityModal(false)}
      />
    </ScrollView>
  );
}

export default Home;

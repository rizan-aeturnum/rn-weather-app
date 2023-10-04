import { ScrollView, View } from "react-native";
import { IconButton } from "@react-native-material/core";
import WeatherDetails from "../../components/WeatherDetails";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MUIcon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import AddCityModal from "./AddCityModal";
import { useState } from "react";
import useCityData from "../../hooks/useCityData";
import EmptyCity from "../../components/EmptyCity";

function Home() {
  const [showAddCityModal, setShowAddCityModal] = useState<boolean>(false);
  const safeAreaInsets = useSafeAreaInsets();

  const { cities, loadCities } = useCityData();

  return (
    <>
      <ScrollView
        contentContainerStyle={[
          { paddingTop: safeAreaInsets.top * 2 },
          styles.pageContainer,
        ]}
      >
        {cities.length === 0 && <EmptyCity />}
        {cities.map((city) => (
          <WeatherDetails
            key={city.url}
            city={city}
            reloadCities={loadCities}
          />
        ))}
      </ScrollView>
      <IconButton
        icon={<MUIcon name="plus" style={styles.floatingIconBtnIcon} />}
        style={styles.floatingIconBtn}
        onPress={() => setShowAddCityModal(true)}
      />
      <AddCityModal
        isVisible={showAddCityModal}
        onModalClose={() => {
          loadCities();
          setShowAddCityModal(false);
        }}
      />
    </>
  );
}

export default Home;

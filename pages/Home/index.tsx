import { ScrollView, Dimensions, View } from "react-native";
import { IconButton } from "@react-native-material/core";
import WeatherDetails from "../../components/WeatherDetails";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MUIcon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import AddCityModal from "./AddCityModal";
import { useState } from "react";
import useCityData from "../../hooks/useCityData";
import EmptyCity from "../../components/EmptyCity";
import Carousel from "react-native-reanimated-carousel";
import theme from "../../styles/theme";

function Home() {
  const [showAddCityModal, setShowAddCityModal] = useState<boolean>(false);
  const [currentCityIndex, setCurrentCityIndex] = useState<number>(0);
  const safeAreaInsets = useSafeAreaInsets();

  const { cities, loadCities } = useCityData();

  return (
    <>
      <View
        style={[{ paddingTop: safeAreaInsets.top * 2 }, styles.pageContainer]}
      >
        {cities.length === 0 ? (
          <EmptyCity />
        ) : (
          <Carousel
            data={cities}
            loop={false}
            height={230}
            width={Dimensions.get("screen").width}
            onSnapToItem={setCurrentCityIndex}
            renderItem={({ item }) => (
              <WeatherDetails
                key={item.url}
                city={item}
                reloadCities={loadCities}
              />
            )}
          />
        )}
        <View style={styles.carouselIndicatorContainer}>
          {cities.map((city, index) => (
            <View
              key={city.url}
              style={[
                styles.carouselIndicator,
                {
                  backgroundColor:
                    index === currentCityIndex
                      ? theme.colors.primary.light
                      : theme.colors.others.grey2,
                },
              ]}
            />
          ))}
        </View>
      </View>
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

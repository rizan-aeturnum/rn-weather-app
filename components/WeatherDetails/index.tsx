import { Text, View, Image } from "react-native";
import styles from "./styles";
import { IconButton } from "@react-native-material/core";
import MUIcon from "@expo/vector-icons/MaterialCommunityIcons";
import useWeatherData from "../../hooks/useWeatherData";
import { get } from "lodash-es";
import theme from "../../styles/theme";
import LoadingIndicator from "../LoadingIndicator";

interface WeatherDetailsProps {
  city: CityData;
}

function WeatherDetails(props: WeatherDetailsProps) {
  const { city } = props;
  const { weatherData, loading, loadWeatherData } = useWeatherData(city);
  const temperature = get(weatherData, "current.temp_c");
  const isDay = get(weatherData, "current.is_day");
  const tileColor = theme.colors.primary[isDay ? "light" : "dark"];
  const weatherImageUrl = `https:${get(weatherData, "current.condition.icon")}`;
  const weatherDescription = get(weatherData, "current.condition.text");
  const lastUpdated = get(weatherData, "current.last_updated");

  return (
    <View style={[styles.container, { backgroundColor: tileColor }]}>
      {loading && <LoadingIndicator />}
      <View style={styles.innerContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.cityText}>{city.name}</Text>
          <Text style={styles.citySubText}>
            {city.region}, {city.country}
          </Text>
        </View>
        <View>
          <Text style={styles.tempText}>{temperature}°C</Text>
          <Text style={styles.subTempText}>{lastUpdated}</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: weatherImageUrl,
            }}
            width={70}
            height={70}
          />
          <Text style={[styles.citySubText, styles.weatherDescriptionText]}>
            {weatherDescription}
          </Text>
        </View>
        <View style={styles.iconBtnContainer}>
          <IconButton
            icon={<MUIcon name="reload" style={styles.iconBtnIcon} />}
            onPress={loadWeatherData}
          />
          <IconButton
            icon={<MUIcon name="delete" style={styles.iconBtnIcon} />}
          />
        </View>
      </View>
    </View>
  );
}

export default WeatherDetails;

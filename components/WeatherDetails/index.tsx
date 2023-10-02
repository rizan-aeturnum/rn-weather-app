import { Text, View, Image } from "react-native";
import styles from "./styles";
import { IconButton } from "@react-native-material/core";
import MUIcon from "@expo/vector-icons/MaterialCommunityIcons";

function WeatherDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.cityText}>Galle</Text>
          <Text style={styles.citySubText}>Southern, Sri Lanka</Text>
        </View>
        <View>
          <Text style={styles.tempText}>28.4°C</Text>
          <Text style={styles.subTempText}>Updated 3min ago</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View>
          <Image
            source={{
              uri: "https://cdn.weatherapi.com/weather/64x64/day/176.png",
            }}
            width={100}
            height={100}
          />
          <Text style={styles.citySubText}>Patchy rain possible</Text>
        </View>
        <View style={styles.iconBtnContainer}>
          <IconButton
            icon={<MUIcon name="reload" style={styles.iconBtnIcon} />}
          />
          <IconButton
            color="red"
            icon={<MUIcon name="delete" style={styles.iconBtnIcon} />}
          />
        </View>
      </View>
    </View>
  );
}

export default WeatherDetails;

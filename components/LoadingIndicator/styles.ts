import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export default StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: `${theme.colors.others.grey1}65`,
    justifyContent: "center",
    alignItems: "center",
  },
});

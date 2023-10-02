import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export default StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  floatingIconBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primary.main,
    position: "absolute",
    bottom: 40,
    right: 30,
  },
  floatingIconBtnIcon: {
    fontSize: theme.fontSize.h3,
    color: theme.colors.others.white,
  },
});

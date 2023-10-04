import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary.light,
    padding: theme.spacing[4],
    marginHorizontal: theme.spacing[3],
    marginBottom: theme.spacing[3],
    borderRadius: theme.spacing[2],
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerContainer: {
    height: "100%",
  },
  detailsContainer: {
    marginBottom: theme.spacing[5],
  },
  cityText: {
    fontSize: theme.fontSize.h3,
    color: theme.colors.others.white,
  },
  citySubText: {
    fontSize: theme.fontSize.p2,
    color: theme.colors.others.grey1,
  },
  tempText: {
    fontSize: theme.fontSize.h1,
    fontWeight: "600",
    color: theme.colors.others.grey1,
  },
  subTempText: {
    color: theme.colors.others.grey2,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  weatherDescriptionText: {
    width: "100%",
    textAlign: "center",
  },
  iconBtnContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "row",
  },
  iconBtnIcon: {
    color: theme.colors.others.grey1,
    fontSize: theme.fontSize.h4,
  },
});

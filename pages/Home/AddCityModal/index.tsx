import { FlatList, Modal, Text, View } from "react-native";
import { IconButton, TextInput, ListItem } from "@react-native-material/core";
import MUIcon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import theme from "../../../styles/theme";

interface AddCityModalProps {
  isVisible: boolean;
  onModalClose: () => void;
}

function AddCityModal(props: AddCityModalProps) {
  const { isVisible } = props;
  const { onModalClose } = props;
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitleText}>Search and Add City</Text>
        <IconButton
          icon={<MUIcon name="close" style={styles.headerTitleText} />}
          onPress={onModalClose}
        />
      </View>
      <View style={styles.bodyContainer}>
        <TextInput
          variant="outlined"
          label="City Name"
          color={theme.colors.primary.main}
          autoFocus
        />
        <FlatList
          data={["Galle", "Colombo"]}
          renderItem={({ item }) => <ListItem title={item} />}
          keyExtractor={(item) => item}
        />
      </View>
    </Modal>
  );
}

export default AddCityModal;

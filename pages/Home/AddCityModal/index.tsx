import MUIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { IconButton, TextInput, ListItem } from '@react-native-material/core';
import { Alert, FlatList, Modal, Text, View } from 'react-native';

import styles from './styles';
import useCitySearch from '../../../hooks/useCitySearch';
import CityService from '../../../services/CityService';
import theme from '../../../styles/theme';
import { CityData } from '../../../types/apidata';

interface AddCityModalProps {
  isVisible: boolean;

  onModalClose: () => void;
}

function AddCityModal(props: AddCityModalProps) {
  const { isVisible } = props;
  const { onModalClose } = props;
  const { searchWord, searchedCities, setSearchWord } = useCitySearch();

  const onCityPress = (city: CityData) => () => {
    Alert.alert('Add City', 'Do you want to this city the weather forecast', [
      {
        isPreferred: true,
        text: 'Add',
        onPress: () => {
          CityService.addCityToStorage(city)
            .then(() => Alert.alert('City Added', 'Successfully added the city to the list'))
            .catch(() =>
              Alert.alert(
                'City Not Added',
                'Something went wrong while adding the city. city might be already in the list.'
              )
            );
        },
      },
      {
        text: 'Cancel',
      },
    ]);
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitleText}>Search and Add City</Text>
        <IconButton
          icon={<MUIcon name="close" style={styles.headerTitleText} />}
          onPress={() => {
            onModalClose();
            setSearchWord('');
          }}
        />
      </View>
      <View style={styles.bodyContainer}>
        <TextInput
          variant="outlined"
          label="City Name"
          color={theme.colors.primary.main}
          autoFocus
          onChange={(e) => {
            setSearchWord(e.nativeEvent.text);
          }}
          value={searchWord}
        />
        <FlatList
          data={searchedCities}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <ListItem
              title={`${item.name} - ${item.region}, ${item.country}`}
              onPress={onCityPress(item)}
            />
          )}
          keyExtractor={(item) => item.url}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Text style={styles.emptyListText}>No Filtered Cities to Show</Text>
            </View>
          )}
        />
      </View>
    </Modal>
  );
}

export default AddCityModal;

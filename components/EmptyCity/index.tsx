import { Text, View } from 'react-native';

import styles from './styles';

function EmptyCity() {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>Please add city to see weather details</Text>
    </View>
  );
}

export default EmptyCity;

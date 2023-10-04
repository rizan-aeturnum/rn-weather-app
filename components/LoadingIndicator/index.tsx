import { ActivityIndicator } from '@react-native-material/core';
import { View } from 'react-native';

import styles from './styles';
import theme from '../../styles/theme';

function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary.main} />
    </View>
  );
}

export default LoadingIndicator;

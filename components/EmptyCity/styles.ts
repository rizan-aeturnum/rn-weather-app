import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export default StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: theme.colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing[3],
    borderRadius: theme.spacing[2],
    padding: theme.spacing[4],
  },
  emptyText: {
    fontSize: theme.fontSize.p1,
    color: theme.colors.others.white,
    textAlign: 'center',
  },
});

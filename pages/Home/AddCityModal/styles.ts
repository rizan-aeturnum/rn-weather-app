import { StyleSheet } from 'react-native';

import theme from '../../../styles/theme';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing[2],
    marginHorizontal: theme.spacing[1],
    marginVertical: theme.spacing[3],
  },
  headerTitleText: {
    fontSize: theme.fontSize.h4,
  },
  headerCloseBtnIconText: {
    fontSize: theme.fontSize.h4,
  },
  bodyContainer: {
    paddingHorizontal: theme.spacing[2],
  },
  emptyListContainer: {
    padding: theme.spacing[3],
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    fontSize: theme.fontSize.p1,
    color: theme.colors.others.dark1,
  },
});

import { StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'

interface IStyles {
  body: RNStyleType
  container: RNStyleType
  noPadding: RNStyleType
}

/**
 *
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    body: {
      flex: 1,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: height(10),
      paddingHorizontal: width(10),
    },
    noPadding: {
      paddingHorizontal: 0,
      paddingVertical: 0,
    },
  })
}

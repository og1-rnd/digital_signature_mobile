import { StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'

interface IStyles {
  label: RNStyleType
  errorPadding: RNStyleType
  error: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    errorPadding: {
      paddingBottom: height(14),
    },
    label: {
      marginBottom: height(8),
    },
    error: {
      position: 'absolute',
      marginLeft: width(6),
      bottom: 0,
    },
  })
}

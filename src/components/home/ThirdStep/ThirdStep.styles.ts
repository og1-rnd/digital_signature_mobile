import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  resultItem: RNStyleType
  resultItemTitle: RNStyleType
  backButton: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    resultItem: {
      marginBottom: height(24),
    },
    resultItemTitle: {
      marginBottom: height(4),
    },
    backButton: {
      marginTop: height(12),
    },
  })
}

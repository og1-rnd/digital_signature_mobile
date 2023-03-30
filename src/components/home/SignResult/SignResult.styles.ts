import { StyleSheet } from 'react-native'
import { height, RNStyleType, width } from '@utils'

interface IStyles {
  title: RNStyleType
  resultItem: RNStyleType
  icon: RNStyleType
  revIcon: RNStyleType
  resultItemTitle: RNStyleType
  backButton: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    title: {
      textAlign: 'center',
      marginBottom: height(24),
    },
    resultItem: {
      marginBottom: height(24),
    },
    resultItemTitle: {
      flexDirection: 'row',
      marginBottom: height(4),
    },
    icon: {
      marginLeft: width(4),
    },
    revIcon: {
      transform: [{ rotate: '180deg' }],
    },
    backButton: {
      marginTop: height(12),
    },
  })
}

import { StyleSheet } from 'react-native'
import { RNStyleType, width } from '@utils'
interface IStyles {
  containerLeft: RNStyleType
  containerRight: RNStyleType
  opacity: RNStyleType
}

/**
 *
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    containerLeft: {
      paddingRight: width(4),
      paddingLeft: width(24),
    },
    containerRight: {
      paddingRight: width(24),
      paddingLeft: width(4),
    },
    opacity: {
      opacity: 0.4,
    },
  })
}

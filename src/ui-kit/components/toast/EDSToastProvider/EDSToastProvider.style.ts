import { StyleSheet } from 'react-native'
import { RNStyleType } from '@utils'

interface IStyles {
  toastContainer: RNStyleType
}

/**
 * @return {IStyles}
 */
export function getStyle(): IStyles {
  return StyleSheet.create({
    toastContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
    },
  })
}

import { StyleSheet } from 'react-native'
import { height, RNStyleType } from '@utils'

interface IStyles {
  container: RNStyleType
  logo: RNStyleType
}

/**
 * @return {IStyles}
 */
export default function getStyle(): IStyles {
  return StyleSheet.create({
    container: {
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: height(47),
    },
    logo: {
      marginBottom: height(50),
    },
  })
}

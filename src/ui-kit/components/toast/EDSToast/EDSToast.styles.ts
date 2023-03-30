import { StyleSheet } from 'react-native'
import {
  getThemeColor,
  height,
  radius,
  RNStyleType,
  ThemeType,
  width,
} from '@utils'

interface IStyles {
  container: RNStyleType
  smallContainer: RNStyleType
  iconContainer: RNStyleType
  messages: RNStyleType
  smallToastMessages: RNStyleType
}

/**
 * @param {ThemeType} theme
 * @return {IStyles}
 */
export function getStyle(theme: ThemeType): IStyles {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: height(12),
      marginHorizontal: width(20),
      marginBottom: height(10),
      borderRadius: radius(12),
      borderWidth: width(1),
      borderColor: getThemeColor('LIGHT_BORDER', theme),
      backgroundColor: getThemeColor('BACKGROUND', theme),
    },
    smallContainer: {
      padding: 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'transparent',
      backgroundColor: 'transparent',
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    messages: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: width(10),
    },
    smallToastMessages: {
      borderRadius: radius(8),
      padding: height(8),
      paddingHorizontal: width(20),
      backgroundColor: getThemeColor('SMALL_TOAST_BACKGROUND', theme),
    },
  })
}

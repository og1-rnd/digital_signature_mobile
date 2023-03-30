import { StyleSheet } from 'react-native'
import { getThemeColor, RNStyleType, ThemeType } from '@utils'

interface IStyles {
  container: RNStyleType
}

/**
 *
 * @param {string} theme
 * @return {IStyles}
 */
export default function getStyle(theme?: ThemeType): IStyles {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getThemeColor('APP_BACKGROUND', theme),
    },
  })
}

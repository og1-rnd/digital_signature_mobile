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
}

/**
 * @param {ThemeType} theme
 * @return {IStyles}
 */
export default function getStyle(theme: ThemeType): IStyles {
  return StyleSheet.create({
    container: {
      width: '100%',
      paddingHorizontal: width(23),
      paddingVertical: height(32),
      borderWidth: width(1),
      borderRadius: radius(14),
      borderColor: getThemeColor('BLUE_BORDER', theme),
      backgroundColor: getThemeColor('STEP_CARD_BACKGROUND', theme),
    },
  })
}

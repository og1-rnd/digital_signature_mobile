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
  content: RNStyleType
  text: RNStyleType
}

/**
 * @param {ThemeType} theme
 * @return {IStyles}
 */
export default function getStyle(theme: ThemeType): IStyles {
  return StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
    },
    content: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: width(57),
      paddingVertical: width(80),
      borderWidth: width(1),
      borderRadius: radius(12),
      borderColor: getThemeColor('BLUE_LIGHT_BORDER', theme),
      backgroundColor: getThemeColor('STEP_CARD_BACKGROUND', theme),
    },
    text: {
      textAlign: 'center',
      marginTop: height(32),
    },
  })
}

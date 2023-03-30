import { StyleSheet } from 'react-native'
import { Buttons } from '@ui-kit/styles'
import { getThemeColor, RNStyleType, ThemeType } from '@utils'

interface IStyles {
  container: RNStyleType
  disabledTitle: RNStyleType
  title: RNStyleType
  secondaryTitle: RNStyleType
  disabledSecondaryTitle: RNStyleType
  transparentText: RNStyleType
  disableTransparentText: RNStyleType
}

/**
 *
 * @param {string} theme
 * @return {IStyles}
 */
export default function getStyle(theme?: ThemeType): IStyles {
  return StyleSheet.create({
    container: {
      ...Buttons.baseButtonStyle,
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      color: getThemeColor('STATIC_BUTTONS_TEXT', theme),
    },
    disabledTitle: {
      color: getThemeColor('DISABLE_STATIC_BUTTONS_TEXT', theme),
    },
    secondaryTitle: {
      color: getThemeColor('STATIC_SECONDARY_BUTTONS_TEXT', theme),
    },
    disabledSecondaryTitle: {
      color: getThemeColor('DISABLE_STATIC_SECONDARY_BUTTONS_TEXT', theme),
    },
    transparentText: {
      color: getThemeColor('TRANSPARENT_TEXT', theme),
    },
    disableTransparentText: {
      color: getThemeColor('DISABLE_TRANSPARENT_BUTTONS_TEXT', theme),
    },
  })
}

import { StyleSheet } from 'react-native'
import { Fonts, Inputs } from '@ui-kit/styles'
import { getThemeColor, RNStyleType, ThemeType } from '@utils'

interface IStyles {
  container: RNStyleType
  containerFocus: RNStyleType
  containerError: RNStyleType
  textBold: RNStyleType
  textRegular: RNStyleType
  textError: RNStyleType
  textDisabled: RNStyleType
  containerDisabled: RNStyleType
}

/**
 *
 * @param {string} theme
 * @return {IStyles}
 */
export default function getStyle(theme?: ThemeType): IStyles {
  return StyleSheet.create({
    container: {
      ...Inputs.inputContainer,
      borderColor: getThemeColor('BORDER_INPUT', theme),
      backgroundColor: getThemeColor('BACKGROUND_INPUT', theme),
    },
    containerDisabled: {
      ...Inputs.inputContainer,
      backgroundColor: getThemeColor('BACKGROUND_DISABLE_INPUT', theme),
    },
    containerFocus: {
      borderColor: getThemeColor('BORDER_FOCUSED_INPUT', theme),
    },
    containerError: {
      borderColor: getThemeColor('ERROR_INPUT', theme),
    },
    textBold: {
      ...Fonts.semiBold,
    },
    textRegular: {
      ...Fonts.regular,
    },
    textError: {
      color: getThemeColor('ERROR_INPUT', theme),
    },
    textDisabled: {
      color: getThemeColor('DISABLE_INPUT', theme),
    },
  })
}

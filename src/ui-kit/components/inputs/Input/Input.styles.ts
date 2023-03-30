import { StyleSheet } from 'react-native'
import { Inputs } from '@ui-kit/styles'
import { getThemeColor, RNStyleType, ThemeType } from '@utils'

interface IStyles {
  input: RNStyleType
}

/**
 *
 * @param {string} theme
 * @return {IStyles}
 */
export default function getStyle(theme?: ThemeType): IStyles {
  return StyleSheet.create({
    input: {
      ...Inputs.input,
      color: getThemeColor('BASE_TEXT', theme),
    },
  })
}

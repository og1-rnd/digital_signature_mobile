import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '@ui-kit/styles'
import { getThemeColor, RNStyleType } from '@utils'
import { ThemeType } from '@utils'

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
      ...ApplicationStyles.container,
      backgroundColor: getThemeColor('BACKGROUND', theme),
    },
  })
}

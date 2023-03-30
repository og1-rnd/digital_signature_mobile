import { StyleSheet } from 'react-native'
import { textType } from '@ui-kit/components/text/EDSText/EDSText.types'
import { Fonts } from '@ui-kit/styles'
import { sp, ThemeType } from '@utils'
import { getThemeColor, RNStyleType } from '@utils'

interface IStyles {
  font: RNStyleType
  link: RNStyleType
  error: RNStyleType
  bold: RNStyleType
  secondary: RNStyleType
  tertiary: RNStyleType
}

/**
 *
 * @param {string} theme
 * @return {IStyles}
 */
export function getStyle(theme?: ThemeType): IStyles {
  return StyleSheet.create({
    font: {
      ...Fonts.baseFontStyle,
      ...Fonts.regular,
      color: getThemeColor('BASE_TEXT', theme),
    },
    link: {
      color: getThemeColor('LINK_TEXT', theme),
    },
    error: {
      color: getThemeColor('ERROR_TEXT', theme),
    },
    secondary: {
      color: getThemeColor('SECONDARY_TEXT', theme),
    },
    tertiary: {
      color: getThemeColor('TERTIARY_TEXT', theme),
    },
    bold: {
      ...Fonts.semiBold,
    },
  })
}

/**
 *
 * @param {textType} type
 * @return {RNStyleType}
 */
export function getTextStyle(type?: textType): RNStyleType {
  switch (type) {
    case 'desktop-title': {
      return StyleSheet.flatten({
        fontSize: sp(20),
        lineHeight: sp(20),
        ...Fonts.semiBold,
      })
    }
    case 'desktop-h3': {
      return StyleSheet.flatten({
        fontSize: sp(17),
        lineHeight: sp(21),
        ...Fonts.semiBold,
      })
    }
    case 'desktop-h2': {
      return StyleSheet.flatten({
        fontSize: sp(20),
        lineHeight: sp(24),
        ...Fonts.semiBold,
      })
    }
    case 'desktop-font-body': {
      return StyleSheet.flatten({
        fontSize: sp(15),
        lineHeight: sp(20),
        ...Fonts.regular,
      })
    }
    case 'desktop-font-notes': {
      return StyleSheet.flatten({
        fontSize: sp(13),
        lineHeight: sp(15),
        ...Fonts.regular,
      })
    }
    case 'small-reg': {
      return StyleSheet.flatten({
        fontSize: sp(11),
        lineHeight: sp(14),
        ...Fonts.regular,
      })
    }
    case 'adaptive-h3': {
      return StyleSheet.flatten({
        fontSize: sp(17),
        lineHeight: sp(24),
        ...Fonts.regular,
      })
    }
  }
}

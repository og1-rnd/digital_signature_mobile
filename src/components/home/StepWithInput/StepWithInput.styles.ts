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
  title: RNStyleType
  ruleItem: RNStyleType
  dot: RNStyleType
  input: RNStyleType
  ruleItemText: RNStyleType
  backButton: RNStyleType
}

/**
 * @param {ThemeType} theme
 * @return {IStyles}
 */
export default function getStyle(theme: ThemeType): IStyles {
  return StyleSheet.create({
    title: {
      marginBottom: height(12),
    },
    ruleItem: {
      flexDirection: 'row',
      marginBottom: height(4),
    },
    ruleItemText: {
      flex: 1,
    },
    dot: {
      height: height(8),
      width: height(8),
      marginRight: width(8),
      marginTop: height(6),
      borderRadius: radius(100),
      backgroundColor: getThemeColor('LIGHT_BORDER', theme),
    },
    input: {
      marginTop: height(8),
      marginBottom: height(24),
    },
    backButton: {
      marginTop: height(12),
    },
  })
}

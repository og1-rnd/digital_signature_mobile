import { StyleSheet } from 'react-native'
import { getThemeColor, height, RNStyleType, ThemeType, width } from '@utils'

interface IStyles {
  contentSection: RNStyleType
  centerStyle: RNStyleType
}

/**
 * @param {ThemeType} theme
 * @return {IStyles}
 */
export default function getStyle(theme: ThemeType): IStyles {
  return StyleSheet.create({
    contentSection: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: height(56),
      borderBottomWidth: width(1),
      borderBottomColor: getThemeColor('LIGHT_BORDER', theme),
    },
    centerStyle: {
      width: '100%',
      position: 'absolute',
      alignItems: 'center',
      paddingHorizontal: width(50),
      zIndex: -1,
    },
  })
}

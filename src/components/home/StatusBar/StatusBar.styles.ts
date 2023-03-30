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
  steps: RNStyleType
  circleContainer: RNStyleType
  circle: RNStyleType
  lastCircleContainer: RNStyleType
  activeCircle: RNStyleType
  line: RNStyleType
}

/**
 * @param {ThemeType} theme
 * @return {IStyles}
 */
export default function getStyle(theme: ThemeType): IStyles {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      marginBottom: height(50),
    },
    steps: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: height(20),
    },
    circle: {
      alignItems: 'center',
      justifyContent: 'center',
      width: height(40),
      height: height(40),
      borderWidth: width(1),
      borderColor: getThemeColor('LIGHT_BORDER', theme),
      borderRadius: radius(100),
    },
    circleContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    activeCircle: {
      borderColor: getThemeColor('ACTIVE_STATUS_CIRCLE', theme),
      backgroundColor: getThemeColor('ACTIVE_STATUS_CIRCLE', theme),
    },
    lastCircleContainer: {
      flex: 0,
    },
    line: {
      flex: 1,
      height: width(1),
      backgroundColor: getThemeColor('LIGHT_BORDER', theme),
      margin: height(8),
    },
  })
}

import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { ThemeType } from '@utils/Theme/GetThemeColorTypes'

export interface IEDSContainerProps {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  isKeyBoardDismiss?: boolean
  isTransparentHeader?: boolean
  paddingBottom?: number
  paddingHorizontal?: number
  theme?: ThemeType
}

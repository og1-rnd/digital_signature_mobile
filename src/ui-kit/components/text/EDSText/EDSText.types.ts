import { ReactNode } from 'react'
import { ColorValue, StyleProp, TextProps, TextStyle } from 'react-native'
import { ThemeType } from '@utils'

export interface IEDSTextProps extends TextProps {
  children: ReactNode
  textType?: textType
  isError?: boolean
  isBold?: boolean
  isSecondary?: boolean
  isTertiary?: boolean
  style?: StyleProp<TextStyle>
  size?: number
  color?: ColorValue
  other?: TextProps
  theme?: ThemeType
}

export type textType =
  | 'small-reg'
  | 'desktop-title'
  | 'desktop-h2'
  | 'desktop-h3'
  | 'desktop-font-body'
  | 'desktop-font-notes'
  | 'adaptive-h3'

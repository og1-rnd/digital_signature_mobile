import {
  ColorSchemeName,
  ImageStyle,
  StatusBarStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface IThemes {
  [key: string]: any
}

export interface IStatusBarThemes {
  [key: string]: StatusBarStyle
}

export type ThemeType = ColorSchemeName

export type RNStyleType = StyleProp<ViewStyle | TextStyle>
export type ImageStyleType = StyleProp<ImageStyle>

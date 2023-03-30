import { TextProps } from 'react-native'
import { HeaderType, RNStyleType, ThemeType } from '@utils'

export interface IEDSTitleHeaderProps extends TextProps {
  theme?: ThemeType
  containerTitleStyle?: RNStyleType
  titleNumberOfLines?: number
  textTitleStyle?: RNStyleType
  titleAlign?: TitleAlignType
  title: string
  headerType?: HeaderType
}

export type TitleAlignType = 'left' | 'center' | 'right'

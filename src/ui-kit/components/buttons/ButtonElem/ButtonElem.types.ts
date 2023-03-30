import { RNStyleType, ThemeType } from '@utils'

export interface IButtonElemProps {
  isLoading?: boolean
  iconName?: string
  iconColor?: string
  iconSize?: number
  style?: RNStyleType
  theme?: ThemeType
  loaderType?: buttonLoaderType
}

export type buttonLoaderType = 'white' | 'blue'

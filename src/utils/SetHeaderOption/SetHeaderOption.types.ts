import { TitleAlignType } from '@ui-kit/components'
import { RNStyleType, ThemeType } from '@utils'

export interface IHeaderOption {
  theme?: ThemeType
  title?: string
  titleAlign?: TitleAlignType
  titleNumberOfLines?: number
  containerTitleStyle?: RNStyleType
  textTitleStyle?: RNStyleType
  leftComponentType?: LeftComponentType
  centerComponentType?: CenterComponentType
  rightComponentType?: RightComponentType
  headerType?: HeaderType
  onLeftButtonPress?: () => void
  onRightButtonPress?: () => void
}

export type BaseComponentsType = 'none' | 'default'
export type HeaderType = 'default'

export type LeftComponentType = BaseComponentsType | 'Back'
export type CenterComponentType = BaseComponentsType | 'Title'
export type RightComponentType = BaseComponentsType | 'Settings'

export type ActionComponentTypes = {
  [key in
    | LeftComponentType
    | CenterComponentType
    | RightComponentType]?: Function
}

import { textType } from '@ui-kit/components'
import { RNStyleType } from '@utils'

export interface IButtonSize {
  containerStyle: RNStyleType
  leftElemMargin: RNStyleType
  rightElemMargin: RNStyleType
  titleSize: textType
}
export interface IIconButtonSize {
  iconSize: number
}

export type buttonSizeType = 'large' | 'medium' | 'small'

import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { PressableProps } from 'react-native'
import { buttonSizeType, ThemeType } from '@utils'

export interface IEDSButtonProps extends PressableProps {
  title?: string
  titleStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
  isDisabled?: boolean
  isSecondary?: boolean
  isBorder?: boolean
  isLoading?: boolean
  isTransparent?: boolean
  buttonSize?: buttonSizeType
  theme?: ThemeType
  leftElem?: string
  rightElem?: string
}

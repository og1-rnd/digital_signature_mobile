import { TextInputProps } from 'react-native'
import { RNStyleType, ThemeType } from '@utils'

export interface IInputProps extends TextInputProps {
  style?: RNStyleType
  disabled?: boolean
  theme?: ThemeType
}

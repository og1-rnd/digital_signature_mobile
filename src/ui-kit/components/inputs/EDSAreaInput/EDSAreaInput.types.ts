import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TextInputProps,
} from 'react-native'
import { RNStyleType, ThemeType } from '@utils'

export interface IEDSAreaInputProps extends TextInputProps {
  theme?: ThemeType
  inputContainerStyle?: RNStyleType
  disabled?: boolean
  onEndEditing?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void
  inputStyle?: RNStyleType
  error?: string
  defaultValue?: string
  errorStyle?: RNStyleType
  label?: string
  labelStyle?: RNStyleType
  EDSContainerStyle?: RNStyleType
  enableErrorPadding?: boolean
}

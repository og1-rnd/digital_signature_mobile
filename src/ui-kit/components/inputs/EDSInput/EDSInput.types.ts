import React from 'react'
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TextInputProps,
} from 'react-native'
import { RNStyleType, ThemeType } from '@utils'

export interface IEDSInputProps extends TextInputProps {
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
  rightElement?: React.ReactNode
  children?: React.ReactChild
  enableErrorPadding?: boolean
  borderError?: boolean
  onInputFocus?: () => void
}

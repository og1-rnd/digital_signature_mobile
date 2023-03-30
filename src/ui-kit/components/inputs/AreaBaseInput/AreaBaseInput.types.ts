import React from 'react'
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TextInputProps,
} from 'react-native'
import { RNStyleType, ThemeType } from '@utils'

export interface IAreaBaseInputProps extends TextInputProps {
  theme?: ThemeType
  containerStyle?: RNStyleType
  disabled?: boolean
  onEndEditing?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void
  inputStyle?: RNStyleType
  error?: string
  defaultValue?: string
  rightElement?: React.ReactNode
  areaInput?: boolean
  onInputFocus?: () => void
}

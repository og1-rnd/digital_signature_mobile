import React from 'react'
import { ViewProps } from 'react-native'
import { RNStyleType } from '@utils'

export interface IKeyboardShiftProps extends ViewProps {
  children?: React.ReactNode
  disabledKeyboardDismiss?: boolean
  style?: RNStyleType
  enabled?: boolean
}

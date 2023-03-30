import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface IEDSComboItemProps {
  style?: StyleProp<ViewStyle>
  styleBody?: StyleProp<ViewStyle>
  leftElement?: React.ReactNode
  bodyElement?: React.ReactNode
  rightElement?: React.ReactNode
  noPadding?: boolean
}

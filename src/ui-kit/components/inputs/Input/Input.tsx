import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { getThemeColor } from '@utils'

import getStyle from './Input.styles'
import { IInputProps } from './Input.types'

/**
 * @description foundational component
 * @param {IInputProps} props
 * @constructor
 */
const Input = (props: IInputProps) => {
  const { theme, style, disabled, ...other } = props
  const styles = getStyle(theme)

  return (
    <TextInput
      style={StyleSheet.flatten([styles.input, style])}
      placeholderTextColor={
        disabled
          ? getThemeColor('DISABLE_PLACEHOLDER_INPUT', theme)
          : getThemeColor('PLACEHOLDER_INPUT', theme)
      }
      editable={!disabled}
      autoCorrect={false}
      autoCapitalize="none"
      underlineColorAndroid="transparent"
      {...other}
    />
  )
}

export default Input

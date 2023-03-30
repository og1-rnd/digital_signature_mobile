import React, { useState } from 'react'
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputEndEditingEventData,
  View,
} from 'react-native'
import { Input } from '@ui-kit//components/inputs'

import getStyle from './AreaBaseInput.styles'
import { IAreaBaseInputProps } from './AreaBaseInput.types'

/**
 * @description foundational area input component
 * @param {IAreaBaseInputProps} props
 * @constructor
 */
const AreaBaseInput = (props: IAreaBaseInputProps) => {
  const {
    theme,
    containerStyle,
    disabled,
    onEndEditing,
    inputStyle,
    error,
    defaultValue,
    onInputFocus,
    ...other
  } = props
  const styles = getStyle(theme)

  const [isFocus, setFocus] = useState(false)

  /**
   * @param {NativeSyntheticEvent<TextInputEndEditingEventData>} e
   * @return {void}
   */
  const onEndEditingLocal = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ): void => {
    setFocus(false)
    onEndEditing && onEndEditing(e)
  }

  /**
   *
   */
  const onFocus = () => {
    onInputFocus?.()
    setFocus(true)
  }

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        disabled && styles.containerDisabled,
        containerStyle,
        !!error && styles.containerError,
        isFocus && styles.containerFocus,
      ])}
    >
      <Input
        {...other}
        theme={theme}
        onFocus={onFocus}
        disabled={disabled}
        onEndEditing={onEndEditingLocal}
        style={StyleSheet.flatten([
          defaultValue ? styles.textBold : styles.textRegular,
          !!error && styles.textError,
          disabled && styles.textDisabled,
          inputStyle,
        ])}
      />
    </View>
  )
}

export default AreaBaseInput

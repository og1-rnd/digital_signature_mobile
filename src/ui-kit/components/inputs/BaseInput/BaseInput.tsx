import React, { useState } from 'react'
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputEndEditingEventData,
  View,
} from 'react-native'
import { EDSComboItem, Input } from '@ui-kit/components'

import getStyle from './BaseInput.styles'
import { IBaseInputProps } from './BaseInput.types'

/**
 * @description foundational input component.
 * @param {IBaseInputProps} props
 * @constructor
 */
const BaseInput = (props: IBaseInputProps) => {
  const {
    theme,
    containerStyle,
    disabled,
    onEndEditing,
    onInputFocus,
    inputStyle,
    error,
    defaultValue,
    rightElement,
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
      <EDSComboItem
        noPadding
        bodyElement={
          <Input
            theme={theme}
            onFocus={onFocus}
            disabled={disabled}
            onEndEditing={onEndEditingLocal}
            value={defaultValue}
            style={StyleSheet.flatten([
              defaultValue ? styles.textBold : styles.textRegular,
              !!error && styles.textError,
              disabled && styles.textDisabled,
              inputStyle,
            ])}
            {...other}
          />
        }
        rightElement={rightElement}
      />
    </View>
  )
}

export default BaseInput

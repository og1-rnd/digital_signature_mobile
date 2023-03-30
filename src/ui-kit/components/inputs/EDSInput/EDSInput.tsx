import React from 'react'
import { StyleSheet, View } from 'react-native'
import { BaseInput, EDSText } from '@ui-kit/components'

import getStyle from './EDSInput.styles'
import { IEDSInputProps } from './EDSInput.types'

/**
 * @description default input
 * @param {IEDSInputProps} props
 * @constructor
 */
const EDSInput = (props: IEDSInputProps) => {
  const {
    theme,
    inputContainerStyle,
    disabled,
    onEndEditing,
    inputStyle,
    error,
    borderError,
    defaultValue,
    errorStyle,
    labelStyle,
    onInputFocus,
    label,
    EDSContainerStyle,
    enableErrorPadding,
    rightElement,
    ...other
  } = props
  const styles = getStyle()

  return (
    <View
      style={StyleSheet.flatten([
        enableErrorPadding && styles.errorPadding,
        EDSContainerStyle,
      ])}
    >
      {!!label && (
        <EDSText
          theme={theme}
          textType={'desktop-font-body'}
          style={StyleSheet.flatten([styles.label, labelStyle])}
        >
          {label}
        </EDSText>
      )}
      <BaseInput
        theme={theme}
        containerStyle={inputContainerStyle}
        disabled={disabled}
        onEndEditing={onEndEditing}
        inputStyle={inputStyle}
        onInputFocus={onInputFocus}
        error={error || borderError}
        defaultValue={defaultValue}
        rightElement={rightElement}
        {...other}
      />
      {!!error && (
        <EDSText
          theme={theme}
          isError
          textType={'small-reg'}
          style={StyleSheet.flatten([styles.error, errorStyle])}
        >
          {error}
        </EDSText>
      )}
    </View>
  )
}

export default EDSInput

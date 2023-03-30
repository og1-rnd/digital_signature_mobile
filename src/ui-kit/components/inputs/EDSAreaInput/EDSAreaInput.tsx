import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AreaBaseInput, EDSText } from '@ui-kit/components'

import getStyle from './EDSAreaInput.styles'
import { IEDSAreaInputProps } from './EDSAreaInput.types'

/**
 * @description default area input
 * @param {IEDSAreaInputProps} props
 * @constructor
 */
const EDSAreaInput = (props: IEDSAreaInputProps) => {
  const {
    theme,
    inputContainerStyle,
    disabled,
    onEndEditing,
    inputStyle,
    error,
    defaultValue,
    errorStyle,
    labelStyle,
    label,
    EDSContainerStyle,
    enableErrorPadding,
    scrollEnabled,
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
      <AreaBaseInput
        theme={theme}
        containerStyle={inputContainerStyle}
        disabled={disabled}
        onEndEditing={onEndEditing}
        inputStyle={inputStyle}
        error={error}
        defaultValue={defaultValue}
        textAlignVertical="top"
        multiline
        scrollEnabled={scrollEnabled}
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

export default EDSAreaInput

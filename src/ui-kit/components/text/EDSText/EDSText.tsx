import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { sp } from '@utils'

import { getStyle, getTextStyle } from './EDSText.styles'
import { IEDSTextProps } from './EDSText.types'

/**
 *
 * @param {IEDSTextProps} props
 * @constructor
 */
const EDSText = (props: IEDSTextProps) => {
  const {
    children,
    isError,
    style,
    size,
    color,
    theme,
    textType,
    isSecondary,
    isTertiary,
    isBold,
    ...other
  } = props

  const styles = getStyle(theme)
  const textStyle = getTextStyle(textType)

  return (
    <Text
      style={StyleSheet.flatten([
        styles.font,
        isSecondary && styles.secondary,
        isTertiary && styles.tertiary,
        textStyle,
        size ? { fontSize: sp(size) } : {},
        color ? { color: color } : {},
        style,
        isError && styles.error,
        isBold && styles.bold,
      ])}
      {...other}
    >
      {children}
    </Text>
  )
}

export default EDSText

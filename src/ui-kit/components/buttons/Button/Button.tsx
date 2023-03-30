import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { createButtonStyles } from '@utils'

import { IButtonProps } from './Button.types'

/**
 * @description базовый компонент кнопки
 * @param {IButtonProps} props
 * @constructor
 */
const Button = (props: IButtonProps) => {
  const { style, theme, children, isLoading, buttonPreset, options, ...other } =
    props

  return (
    <Pressable
      style={({ pressed }) =>
        StyleSheet.flatten([
          buttonPreset &&
            createButtonStyles(buttonPreset, options, pressed, theme, style),
        ])
      }
      disabled={options?.isDisabled || isLoading}
      {...other}
    >
      {children}
    </Pressable>
  )
}

export default Button

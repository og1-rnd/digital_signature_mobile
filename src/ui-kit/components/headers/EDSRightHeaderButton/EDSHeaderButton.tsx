import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { EDSIcon } from '@ui-kit/components'
import { getThemeColor } from '@utils'

import getStyle from './EDSHeaderButton.styles'
import { IEDSHeaderButton } from './EDSHeaderButton.types'

/**
 * @description обертка над кнопкой в header
 * @param {IEDSHeaderButton} props
 * @constructor
 */
const EDSHeaderButton = (props: IEDSHeaderButton) => {
  const {
    theme,
    style,
    disabled,
    iconName,
    headerType,
    side,
    onButtonPress,
    ...other
  } = props
  const styles = getStyle()

  /**
   * @return {string | number}
   */
  const getIconColor = () => {
    switch (headerType) {
      case 'default':
        return getThemeColor('ICON_HEADER', theme)
      default:
        return undefined
    }
  }

  return (
    <Pressable
      style={({ pressed }) =>
        StyleSheet.flatten([
          side == 'left' && styles.containerLeft,
          side == 'right' && styles.containerRight,
          style,
          (disabled || pressed) && styles.opacity,
        ])
      }
      onPress={onButtonPress}
      disabled={disabled}
      {...other}
    >
      <EDSIcon
        iconName={iconName ?? 'chevron-left'}
        iconSize={26}
        iconColor={getIconColor()}
      />
    </Pressable>
  )
}

export default EDSHeaderButton

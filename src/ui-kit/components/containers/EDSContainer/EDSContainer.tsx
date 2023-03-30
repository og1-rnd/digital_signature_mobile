import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { KeyboardShift } from '@ui-kit/components'
import { getThemeStatusBar, width } from '@utils'

import getStyle from './EDSContainer.styles'
import { IEDSContainerProps } from './EDSContainer.types'

/**
 *
 * @description - базовый контейнер для контента
 * содержит в себе все необходимые по умолчанию отступы
 * @param {IEDSContainerProps} props
 * @constructor
 */
const EDSContainer = (props: IEDSContainerProps) => {
  const {
    paddingBottom = true,
    paddingHorizontal = width(16),
    children,
    style,
    isKeyBoardDismiss = true,
    isTransparentHeader,
    theme,
  } = props
  const styles = getStyle(theme)
  const insets = useSafeAreaInsets()

  return (
    <KeyboardShift
      disabledKeyboardDismiss={!isKeyBoardDismiss}
      style={StyleSheet.flatten([
        styles.container,
        {
          paddingHorizontal: width(paddingHorizontal),
        },
        style,
      ])}
    >
      <StatusBar barStyle={getThemeStatusBar(theme)} />
      <View
        style={StyleSheet.flatten([
          isTransparentHeader ? { paddingTop: 0 } : { height: insets.top },
        ])}
      />
      {children}
      {paddingBottom && <View style={{ height: insets.bottom }} />}
    </KeyboardShift>
  )
}

export default EDSContainer

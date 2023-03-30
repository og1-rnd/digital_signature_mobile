import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  centerComponent,
  IHeaderOption,
  leftComponent,
  rightComponent,
} from '@utils'

import getStyle from './Header.styles'

/**
 * @description компонент Header
 * @return { JSX }
 * @param { IHeaderOption } props
 */
const Header = (props: IHeaderOption) => {
  const {
    theme,
    headerType = 'default',
    leftComponentType = 'default',
    centerComponentType = 'default',
    rightComponentType = 'default',
  } = props
  const styles = getStyle(theme)
  const insets = useSafeAreaInsets()
  const topSectionStyle = StyleSheet.flatten([{ height: insets.top }])
  const contentSectionStyle = StyleSheet.flatten([styles.contentSection])
  const centerStyle = StyleSheet.flatten([styles.centerStyle])

  return (
    <>
      <View style={topSectionStyle} />
      <View style={contentSectionStyle}>
        {leftComponent(leftComponentType, {
          ...props,
          headerType: headerType,
          theme,
        }) ?? <View />}
        {centerComponent(centerComponentType, {
          ...props,
          headerType: headerType,
          containerTitleStyle: centerStyle,
          theme,
        })}
        {rightComponent(rightComponentType, {
          ...props,
          headerType: headerType,
          theme,
        }) ?? <View />}
      </View>
    </>
  )
}

export default Header

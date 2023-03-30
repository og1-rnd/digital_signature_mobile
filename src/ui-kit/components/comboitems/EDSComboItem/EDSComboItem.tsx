import React from 'react'
import { StyleSheet, View } from 'react-native'

import getStyle from './EDSComboItem.styles'
import { IEDSComboItemProps } from './EDSComboItem.types'

/**
 * @description - компонент принимает в себя до 3х элементов
 * @param {IEDSComboItemProps} props
 * @constructor
 */
const EDSComboItem = (props: IEDSComboItemProps) => {
  const {
    style,
    styleBody,
    bodyElement,
    leftElement,
    rightElement,
    noPadding,
  } = props
  const styles = getStyle()

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        noPadding && styles.noPadding,
        style,
      ])}
    >
      {leftElement && <View>{leftElement}</View>}
      <View style={StyleSheet.flatten([styles.body, styleBody])}>
        {bodyElement}
      </View>
      {rightElement && <View>{rightElement}</View>}
    </View>
  )
}

export default EDSComboItem

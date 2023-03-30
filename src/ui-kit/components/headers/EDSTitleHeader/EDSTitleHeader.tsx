import React from 'react'
import { FlexAlignType, StyleSheet, View } from 'react-native'
import { EDSText } from '@ui-kit/components'

import { IEDSTitleHeaderProps } from './EDSTitleHeader.types'

/**
 * @description компонент title для header
 * @param {IEDSTitleHeaderProps} props
 * @constructor
 */
const EDSTitleHeader = (props: IEDSTitleHeaderProps) => {
  const {
    theme,
    containerTitleStyle,
    titleNumberOfLines,
    textTitleStyle,
    titleAlign,
    title,
  } = props

  /**
   * @description позиционирование title
   * @return {FlexAlignType}
   */
  const getAlign = (): FlexAlignType => {
    switch (titleAlign) {
      case 'left':
        return 'flex-start'
      case 'right':
        return 'flex-end'
      default:
        return 'center'
    }
  }
  const alignStyle = { alignItems: getAlign() }

  return (
    <View style={StyleSheet.flatten([containerTitleStyle, alignStyle])}>
      <EDSText
        theme={theme}
        textType={'desktop-h2'}
        numberOfLines={titleNumberOfLines || 1}
        style={textTitleStyle}
      >
        {title}
      </EDSText>
    </View>
  )
}

export default EDSTitleHeader

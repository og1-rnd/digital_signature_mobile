import React from 'react'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import { sp } from '@utils'

import edsIcons from './eds-icons.json'
import { IEDSIconTypes } from './EDSIcon.types'

const Icon = createIconSetFromIcoMoon(edsIcons)

/**
 * @description компонент иконки из иконочного шрифта
 * @param { IEDSIconTypes } props
 * @constructor
 */
const EDSIcon = (props: IEDSIconTypes) => {
  const { iconName, iconColor, iconSize = 20 } = props
  return <Icon name={iconName} color={iconColor} size={sp(iconSize)} />
}

export default EDSIcon

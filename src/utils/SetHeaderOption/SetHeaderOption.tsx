import React from 'react'
import { Navigate } from '@navigators'
import { EDSHeaderButton, EDSTitleHeader } from '@ui-kit/components'

import {
  ActionComponentTypes,
  CenterComponentType,
  IHeaderOption,
  LeftComponentType,
  RightComponentType,
} from './SetHeaderOption.types'

/**
 * @description Выбор действия по типу
 * @param {LeftComponentType | CenterComponentType | RightComponentType} componentType
 * @param {ActionComponentTypes} actionObject
 * @return {Function}
 */
export const actionToTypes = (
  componentType: LeftComponentType | CenterComponentType | RightComponentType,
  actionObject: ActionComponentTypes,
) => {
  return actionObject?.[componentType]?.() || undefined
}

/**
 * @description Компоненты для левой ячейки
 * @param {LeftComponentType} componentType
 * @param {IHeaderOption} props
 * @return {Function}
 */
export const leftComponent = (
  componentType: LeftComponentType,
  props: IHeaderOption,
) => {
  const { theme, headerType, onLeftButtonPress } = props

  const goBack = Navigate.goBack

  /**
   * @param {string} iconName
   * @param {function} onPress
   * @return {JSX}
   */
  const defaultComponent = (iconName: string, onPress?: () => void) => {
    const onPressAction = onPress ? onPress : onLeftButtonPress
    return (
      <EDSHeaderButton
        theme={theme}
        headerType={headerType}
        onButtonPress={onPressAction}
        iconName={iconName}
        side={'left'}
      />
    )
  }

  const actionOfType: ActionComponentTypes = {
    Back: () => {
      return defaultComponent('chevron-left', goBack)
    },
    default: () => {
      return null
    },
  }

  return actionToTypes(componentType, actionOfType)
}

/**
 * @description Компоненты для центральной ячейки
 * @param {CenterComponentType} componentType
 * @param {IHeaderOption} props
 * @return {Function}
 */
export const centerComponent = (
  componentType: CenterComponentType,
  props: IHeaderOption,
) => {
  const {
    theme,
    headerType,
    title,
    titleAlign,
    containerTitleStyle,
    textTitleStyle,
    titleNumberOfLines,
  } = props

  /**
   *
   */
  const defaultComponent = (
    <EDSTitleHeader
      theme={theme}
      headerType={headerType}
      titleAlign={titleAlign}
      title={title || ''}
      titleNumberOfLines={titleNumberOfLines}
      containerTitleStyle={containerTitleStyle}
      textTitleStyle={textTitleStyle}
    />
  )

  const actionOfType: ActionComponentTypes = {
    default: () => {
      return defaultComponent
    },
  }
  return actionToTypes(componentType, actionOfType)
}

/**
 * @description Компоненты для правой ячейки
 * @param {RightComponentType} componentType
 * @param {IHeaderOption} props
 * @return {Function}
 */
export const rightComponent = (
  componentType: RightComponentType,
  props: IHeaderOption,
) => {
  const { theme, headerType, onRightButtonPress } = props

  /**
   * @param {string} iconName
   * @param {function} onPress
   * @return {JSX}
   */
  const defaultComponent = (iconName: string, onPress?: () => void) => {
    const onPressAction = onPress ? onPress : onRightButtonPress
    return (
      <EDSHeaderButton
        theme={theme}
        headerType={headerType}
        onButtonPress={onPressAction}
        iconName={iconName}
        side={'right'}
      />
    )
  }

  const actionOfType: ActionComponentTypes = {
    Settings: () => {
      return defaultComponent('settings')
    },
    default: () => {
      return null
    },
  }
  return actionToTypes(componentType, actionOfType)
}

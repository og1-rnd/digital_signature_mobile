import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Button,
  ButtonElem,
  buttonLoaderType,
  EDSText,
} from '@ui-kit/components'
import {
  ButtonsPresets,
  getButtonSize,
  getIconButtonSize,
  RNStyleType,
} from '@utils'

import getStyle from './EDSButton.styles'
import { IEDSButtonProps } from './EDSButton.types'

/**
 *
 * @param {IEDSButtonProps} props
 * @constructor
 */
const EDSButton = (props: IEDSButtonProps) => {
  const {
    title,
    style,
    isDisabled,
    isSecondary,
    isLoading,
    isBorder,
    titleStyle,
    isTransparent,
    buttonSize,
    leftElem,
    rightElem,
    theme,
    ...other
  } = props
  const styles = getStyle(theme)

  // получаем данные для установки размера кнопки
  const buttonSizeData = getButtonSize(buttonSize)
  const iconSizeData = getIconButtonSize(buttonSize)

  /**
   * @description в каждом стиле возвращается цвет для текста и иконок
   * @return {RNStyleType}
   */
  const getTextAndIconColor = (): RNStyleType => {
    switch (true) {
      case isSecondary:
        return isDisabled
          ? styles.disabledSecondaryTitle
          : styles.secondaryTitle
      case isTransparent || isBorder:
        return isDisabled
          ? styles.disableTransparentText
          : styles.transparentText
      default:
        return isDisabled ? styles.disabledTitle : styles.title
    }
  }
  const textAndIconColor = getTextAndIconColor()

  /**
   * @description определяем цвет колесика загрузки
   * @return {buttonLoaderType}
   */
  const getIconLoaderType = (): buttonLoaderType => {
    if (isBorder || isTransparent) {
      return 'blue'
    }
    return 'white'
  }

  /**
   * @param {boolean} isRightElem
   * @return {JSX}
   */
  const getIconElem = (isRightElem?: boolean) => {
    const iconName = isRightElem ? rightElem : leftElem
    const disableStyle = !title || isLoading
    return (
      <ButtonElem
        theme={theme}
        isLoading={isLoading}
        style={
          !disableStyle &&
          (isRightElem
            ? buttonSizeData.rightElemMargin
            : buttonSizeData.leftElemMargin)
        }
        iconSize={iconSizeData.iconSize}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        iconColor={textAndIconColor?.color}
        loaderType={getIconLoaderType()}
        iconName={iconName}
      />
    )
  }

  /**
   * @return {JSX}
   */
  const getBody = () => {
    return (
      <>
        {leftElem && getIconElem()}
        {title && (
          <EDSText
            textType={buttonSizeData.titleSize}
            style={StyleSheet.flatten([textAndIconColor, titleStyle])}
            theme={theme}
          >
            {title}
          </EDSText>
        )}
        {rightElem && getIconElem(true)}
      </>
    )
  }

  return (
    <Button
      theme={theme}
      isLoading={isLoading}
      buttonPreset={ButtonsPresets.EDS_BUTTON}
      options={{ isSecondary, isDisabled, isTransparent, isBorder }}
      style={StyleSheet.flatten([
        styles.container,
        buttonSizeData.containerStyle,
        style,
      ])}
      {...other}
    >
      {isLoading ? getIconElem() : getBody()}
    </Button>
  )
}

export default EDSButton

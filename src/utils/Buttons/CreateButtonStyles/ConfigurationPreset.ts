import { StyleSheet } from 'react-native'
import { IButtonsOptions, RNStyleType, ThemeType } from '@utils'

import getStyle, { ITable } from './ConfigurationStyles'

/**
 * @description Список возможных пресетов
 */
const enum ButtonsPresets {
  EDS_BUTTON = 'EDS_BUTTON',
}

/**
 *
 * @param {ITable} styles
 * @param {IButtonsOptions}  options
 * @param {boolean}  pressed
 * @return {RNStyleType}
 */
const getButtonStyle = (
  styles: ITable,
  options?: IButtonsOptions,
  pressed?: boolean,
) => {
  if (options?.isSecondary) {
    return options.isDisabled
      ? styles.edsSecondaryButtonDisabled
      : pressed
      ? styles.edsSecondaryButtonPressed
      : styles.edsSecondaryButton
  }
  if (options?.isTransparent) {
    return pressed
      ? styles.edsButtonTransparentPressed
      : styles.edsButtonTransparent
  }
  if (options?.isBorder) {
    return options.isDisabled
      ? styles.edsBorderButtonDisabled
      : pressed
      ? styles.edsBorderButtonPressed
      : styles.edsBorderButton
  }
  return options?.isDisabled
    ? styles.edsButtonDisabled
    : pressed
    ? styles.edsButtonPressed
    : styles.edsButton
}

/**
 *
 * @param {ButtonsPresets} configuration конфиг из enum
 * @param {IButtonsOptions} options дополнительные опции для таблицы стилей
 * @param {boolean} pressed статус нажатия на кнопку
 * @param {string} theme текущая тема
 * @param {RNStyleType} style кастомизированная таблица стилей
 * @return {RNStyleType} возвращает объект стилей
 */
const getPreset = (
  configuration: ButtonsPresets,
  options?: IButtonsOptions,
  pressed?: boolean,
  theme?: ThemeType,
  style?: RNStyleType,
): RNStyleType => {
  const styles = getStyle(theme)

  switch (configuration) {
    case ButtonsPresets.EDS_BUTTON:
      return StyleSheet.flatten([
        styles.edsBorder,
        getButtonStyle(styles, options, pressed),
        style,
      ])
    default:
      return styles.defaultContainer
  }
}

export { ButtonsPresets, getPreset }

import { IButtonsOptions, RNStyleType, ThemeType } from '@utils'

import { ButtonsPresets, getPreset } from './ConfigurationPreset'

/**
 * @description Создает таблицу стилей для компонента Pressable.
 * Вообще все, что содержит в себе Pressable должно стилизоваться
 * через эту функцию.
 * @param {ButtonsPresets} configuration конфиг из enum
 * @param {IButtonsOptions} options дополнительные опции для таблицы стилей
 * @param {boolean} pressed статус нажатия на кнопку
 * @param {string} theme текущая тема
 * @param {RNStyleType} style кастомизированная таблица стилей
 * @return {RNStyleType} возвращает объект стилей
 */
const createButtonStyles = (
  configuration: ButtonsPresets,
  options?: IButtonsOptions,
  pressed?: boolean,
  theme?: ThemeType,
  style?: RNStyleType,
): RNStyleType => {
  return getPreset(configuration, options, pressed, theme, style)
}

export default createButtonStyles

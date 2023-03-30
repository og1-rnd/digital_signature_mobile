import { StyleSheet } from 'react-native'
import { Buttons, Colors } from '@ui-kit/styles'
import { getThemeColor, height, RNStyleType, ThemeType } from '@utils'

/**
 * @description Здесь описаны все стили для кнопок из пресета
 */
export interface ITable {
  defaultContainer: RNStyleType
  edsButton: RNStyleType
  edsButtonDisabled: RNStyleType
  edsButtonPressed: RNStyleType
  edsSecondaryButton: RNStyleType
  edsSecondaryButtonDisabled: RNStyleType
  edsSecondaryButtonPressed: RNStyleType
  edsButtonTransparent: RNStyleType
  edsButtonTransparentPressed: RNStyleType
  edsBorderButton: RNStyleType
  edsBorderButtonPressed: RNStyleType
  edsBorderButtonDisabled: RNStyleType
  edsBorder: RNStyleType
}

/**
 * @description таблица стилей для пресета конфигурации.
 * Таблицы жестко разделены между собой потому что уникальны для
 * своего компонента. Объединять не рекомендуется, т.к. нарушит
 * принцип SOLID о единой зоне отвественности
 * @param {string} theme текущая тема приложения
 * @return {ITable} возвращает объект стилей
 */
export default function getStyle(theme?: ThemeType): ITable {
  return StyleSheet.create({
    // default container (Используется по умолчанию, если не задали пресет)
    defaultContainer: {
      ...Buttons.baseButtonStyle,
    },
    edsButton: {
      backgroundColor: getThemeColor('STATIC_BUTTONS', theme),
    },
    edsButtonDisabled: {
      backgroundColor: getThemeColor('DISABLE_STATIC_BUTTONS', theme),
    },
    edsButtonPressed: {
      backgroundColor: getThemeColor('PRESSED_BUTTONS', theme),
    },
    edsSecondaryButton: {
      backgroundColor: getThemeColor('STATIC_SECONDARY_BUTTONS', theme),
    },
    edsSecondaryButtonDisabled: {
      backgroundColor: getThemeColor('DISABLE_STATIC_SECONDARY_BUTTONS', theme),
    },
    edsSecondaryButtonPressed: {
      backgroundColor: getThemeColor('PRESSED_SECONDARY_BUTTONS', theme),
    },
    edsButtonTransparent: {
      backgroundColor: getThemeColor('TRANSPARENT_BUTTONS', theme),
    },
    edsButtonTransparentPressed: {
      backgroundColor: getThemeColor('PRESSED_TRANSPARENT_BUTTONS', theme),
    },
    edsBorderButton: {
      backgroundColor: getThemeColor('BORDER_BUTTON', theme),
      borderColor: getThemeColor('BORDER_BUTTON_BORDER', theme),
    },
    edsBorderButtonPressed: {
      backgroundColor: getThemeColor('PRESSED_BORDER_BUTTON', theme),
      borderColor: getThemeColor('BORDER_BUTTON_BORDER', theme),
    },
    edsBorderButtonDisabled: {
      backgroundColor: getThemeColor('BORDER_BUTTON', theme),
      borderColor: getThemeColor('DISABLED_BORDER_BUTTON_BORDER', theme),
    },
    edsBorder: {
      borderColor: Colors.TRANSPARENT,
      borderWidth: height(1),
    },
  })
}

import { StatusBarStyle } from 'react-native'
import { DarkColors, DefaultColors } from '@ui-kit/styles'

import { IStatusBarThemes, IThemes, ThemeType } from './GetThemeColorTypes'

const themes: IThemes = {
  light: { ...DefaultColors },
  dark: { ...DarkColors },
}

const statusBarThemes: IStatusBarThemes = {
  light: 'dark-content',
  dark: 'light-content',
}

/**
 * @description Функция для получения цвета в зависимости от установленной
 * темы в приложении. Если параметр темы не передать - цвета вытянуться из
 * default темы
 * @param {string} color
 * @param {string} theme
 * @return {string}
 */
export const getThemeColor = (
  color: string,
  theme: ThemeType,
): string => {
  return themes[theme ?? 'light'][color]
}

/**
 * @description Функция для получения массива градиентов
 * темы в приложении. Если параметр темы не передать - цвета вытянуться из
 * default темы
 * @param {Array<string>} colors
 * @param {string} theme
 * @return {Array<string>}
 */
export const getThemeGradient = (
  colors: Array<string>,
  theme: ThemeType = 'light',
): Array<string> => {
  return colors.map((color) => getThemeColor(color, theme))
}

/**
 *@description - получение темы statusBar
 *@param {ThemeType} theme
 *@return {StatusBarStyle}
 */
export const getThemeStatusBar = (
  theme: ThemeType = 'light',
): StatusBarStyle => {
  return statusBarThemes?.[theme ?? 'light'] || statusBarThemes['light']
}

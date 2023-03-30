import { getThemeColor, ThemeType } from '@utils'

import { toastType, toastViewType } from './EDSToast.types'

/**
 * @param {toastType} intent
 * @param {string} iconColor
 * @param {ThemeType} theme
 * @return {string}
 */
export const getLeftIconColor = (
  intent?: toastType,
  iconColor?: string,
  theme?: ThemeType,
) => {
  switch (intent) {
    case 'SUCCESS':
      return getThemeColor('TOAST_SUCCESS', theme)
    case 'WARNING':
      return getThemeColor('TOAST_WARNING', theme)
    case 'ERROR':
      return getThemeColor('TOAST_ERROR', theme)
    default:
      return iconColor
  }
}

/**
 * @param {toastType} intent
 * @param {string} iconName
 * @param {toastViewType} viewType
 * @return {string}
 */
export const getLeftIconName = (
  intent?: toastType,
  iconName?: string,
  viewType?: toastViewType,
) => {
  if (viewType == 'small') return undefined
  if (iconName) return iconName
  switch (intent) {
    case 'SUCCESS':
      return 'check-circle'
    case 'WARNING':
      return 'exclamation-circle'
    case 'ERROR':
      return 'close-circle'
    default:
      return undefined
  }
}

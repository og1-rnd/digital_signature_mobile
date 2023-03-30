import { height, radius } from '@utils'

import { buttonSizeType, IButtonSize, IIconButtonSize } from './ButtonSizeTypes'

/**
 * @description возвращает значения для размера кнопок
 * @param {buttonSizeType} size
 * @return {IButtonSize}
 */
const getButtonSize = (size?: buttonSizeType): IButtonSize => {
  switch (size) {
    case 'large':
      return LARGE
    case 'medium':
      return MEDIUM
    case 'small':
      return SMALL
    default:
      return LARGE
  }
}

/**
 * @description возвращает значения для размера кнопки - иконки
 * @param {buttonSizeType} size
 * @return {IButtonSize}
 */
const getIconButtonSize = (size?: buttonSizeType): IIconButtonSize => {
  switch (size) {
    case 'large':
      return LARGE_ICON
    case 'medium':
      return MEDIUM_ICON
    case 'small':
      return SMALL_ICON
    default:
      return LARGE_ICON
  }
}

const LARGE: IButtonSize = {
  containerStyle: {
    paddingVertical: height(10),
    paddingHorizontal: height(16),
    borderRadius: radius(8),
  },
  leftElemMargin: { marginRight: height(8) },
  rightElemMargin: { marginLeft: height(8) },
  titleSize: 'desktop-font-body',
}

const MEDIUM: IButtonSize = {
  containerStyle: {
    paddingVertical: height(6),
    paddingHorizontal: height(8),
    borderRadius: radius(6),
  },
  leftElemMargin: { marginRight: height(4) },
  rightElemMargin: { marginLeft: height(4) },
  titleSize: 'desktop-font-body',
}

const SMALL: IButtonSize = {
  containerStyle: {
    paddingVertical: height(4),
    paddingHorizontal: height(8),
    borderRadius: radius(6),
  },
  leftElemMargin: { marginRight: height(4) },
  rightElemMargin: { marginLeft: height(4) },
  titleSize: 'desktop-font-notes',
}

const LARGE_ICON: IIconButtonSize = {
  iconSize: 20,
}

const MEDIUM_ICON: IIconButtonSize = {
  iconSize: 20,
}

const SMALL_ICON: IIconButtonSize = {
  iconSize: 16,
}

export { getButtonSize, getIconButtonSize }

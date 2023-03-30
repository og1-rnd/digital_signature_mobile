import { Dimensions, PixelRatio } from 'react-native'

/**
 * Получаем размер видимого экрана
 */
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

/**
 * Размер эталонного экрана ( логический размер )
 * Iphone Xr, 11 , Xs Max, 11 Pro Max
 */
const referenceHeight = 896
const referenceWidth = 414

/**
 *
 * @param {number} value  Int-овое входное значения px
 * @return {number} Преобразованное значение в зависимости от размера экрана
 */
export const height = (value = 0): number => {
  const validValue = Math.abs(value > referenceHeight ? referenceHeight : value)
  return PixelRatio.roundToNearestPixel(
    (validValue / referenceHeight) * screenHeight,
  )
}
/**
 *
 * @param {number} value Int-овое входное значения px
 * @return {number}
 */
export const width = (value = 0): number => {
  const validValue = Math.abs(value > referenceWidth ? referenceWidth : value)
  return PixelRatio.roundToNearestPixel(
    (validValue / referenceWidth) * screenWidth,
  )
}
/**
 *
 * @description - используем всегда для того, что касается шрифтов
 * (высота линий, размер шрифта)
 * @param {number} value Int-овое входное значения px
 * @return {number}
 */
export const sp = (value = 0): number => {
  const validValue = Math.abs(value > referenceHeight ? referenceHeight : value)
  return PixelRatio.roundToNearestPixel(
    (validValue / referenceHeight) * screenHeight,
  )
}

/**
 *
 * @description - используем всегда для того, что касается радиусов
 * @param {number} value Int-овое входное значения px
 * @return {number}
 */
export const radius = (value = 0): number => {
  const validValue = Math.abs(value > referenceHeight ? referenceHeight : value)
  return PixelRatio.roundToNearestPixel(
    (validValue / referenceHeight) * screenHeight,
  )
}

export { screenHeight, screenWidth }

import { RNStyleType } from '@utils'

/**
 * @description Список возможных параметров, влияющих на таблицу стилей
 */
export interface IButtonsOptions {
  isSecondary?: boolean
  isDanger?: boolean
  isDisabled?: boolean | null
  isLoading?: boolean
  isTransparent?: boolean
  isBorder?: boolean
  onlyBody?: boolean
  pressableOpacity?: RNStyleType
  gradientContainerStyle?: RNStyleType
  gradientColors?: Array<string>
  isText?: boolean
  isIcon?: boolean
  isHide?: boolean
  isNumber?: boolean
  styleContainer?: RNStyleType
  iconSize?: number
}

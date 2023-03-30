import { RNStyleType, ThemeType } from '@utils'

export interface IEDSToastProps {
  theme?: ThemeType
  intent?: toastType
  animationType?: toastAnimationType
  duration?: number
  hideIcon?: boolean
  iconColor?: string
  iconName?: string
  iconSize?: number
  message: string
  subMessage?: string
  onPress?: () => void
  shouldVibrate?: boolean
  toastStyles?: RNStyleType
  hideCloseIcon?: boolean
  shadow?: {
    shadowColor?: string
    shadowOffset?: {
      width: number
      height: number
    }
    shadowOpacity?: number
    shadowRadius?: number
    elevation?: number
  }
  viewType?: toastViewType
}

export interface IToastInternalConfig {
  id?: string
  index?: number
  position?: toastPosition
  onClose?: (id: string) => void
}

export type toastAnimationType = 'slide' | 'scale' | 'fade'
export type toastType = 'SUCCESS' | 'ERROR' | 'WARNING'
export type toastPosition = 'TOP' | 'BOTTOM'
export type toastViewType = 'small' | 'default'

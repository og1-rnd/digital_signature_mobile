import { ReactNode } from 'react'
import {
  IEDSToastProps,
  IToastInternalConfig,
  toastPosition,
} from '@ui-kit/components'

export type ToastContextType = {
  toast: (options: IEDSToastProps) => void
  position?: toastPosition
  offset?: number
  maxToasts?: number
}

export type IEDSToastProviderProps = Omit<ToastContextType, 'toast'> & {
  children: ReactNode
}
export type FullToastConfig = IToastInternalConfig & IEDSToastProps

import * as React from 'react'
import {
  LayoutAnimation,
  LayoutAnimationConfig,
  StyleSheet,
  UIManager,
  View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { EDSToast, IEDSToastProps } from '@ui-kit/components'
import { generateUuid } from '@utils'

import { getStyle } from './EDSToastProvider.style'
import {
  FullToastConfig,
  IEDSToastProviderProps,
  ToastContextType,
} from './EDSToastProvider.types'

const DEFAULT_PROPS: IEDSToastProps = {
  duration: 3000,
  intent: 'SUCCESS',
  onPress: () => false,
  shouldVibrate: false,
  message: 'EDSToast message!',
  hideIcon: false,
  animationType: 'slide',
  hideCloseIcon: false,
}

export const ToastContext = React.createContext<ToastContextType>({
  toast: () => null,
})

/**
 * @return { ToastContextType}
 */
export const useToast = () => React.useContext(ToastContext)

UIManager &&
  UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)

const CustomLayoutConfig: LayoutAnimationConfig = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
}

/**
 * @param {IEDSToastProviderProps} props
 * @constructor
 */
const EDSToastProvider = (props: IEDSToastProviderProps) => {
  const { children, position, offset: offsetProp = 0, maxToasts = 3 } = props
  const styles = getStyle()

  const [toasts, setToasts] = React.useState<FullToastConfig[]>([])

  const inset = useSafeAreaInsets()
  const isBottom = position === 'BOTTOM'
  const originalOffset = (isBottom ? inset?.bottom : inset?.top) || 16
  const offset = offsetProp + originalOffset

  const toast = React.useCallback(
    (newToast: IEDSToastProps) => {
      LayoutAnimation.configureNext(CustomLayoutConfig)
      setToasts((prevToasts) => {
        const toasts = isBottom
          ? [
              ...prevToasts,
              { index: prevToasts.length, id: generateUuid(), ...newToast },
            ]
          : [
              { index: prevToasts.length, id: generateUuid(), ...newToast },
              ...prevToasts,
            ]
        if (maxToasts && prevToasts.length === maxToasts) {
          isBottom ? toasts.shift() : toasts.pop()
          return toasts
        } else {
          return toasts
        }
      })
    },
    [maxToasts],
  )

  /**
   * @param {string} id
   */
  const hideToast = (id: string) => {
    LayoutAnimation.configureNext(CustomLayoutConfig)
    setToasts((prevToasts) => prevToasts.filter((el) => el.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <View
        style={StyleSheet.flatten([
          {
            paddingTop: isBottom ? 0 : offset,
            paddingBottom: isBottom ? offset : 0,
          },
          styles.toastContainer,
        ])}
      >
        {toasts.map((config: FullToastConfig) => {
          return (
            <EDSToast
              {...DEFAULT_PROPS}
              position={position}
              key={config.id}
              onClose={(id) => hideToast(id)}
              {...config}
            />
          )
        })}
      </View>
    </ToastContext.Provider>
  )
}

export default EDSToastProvider

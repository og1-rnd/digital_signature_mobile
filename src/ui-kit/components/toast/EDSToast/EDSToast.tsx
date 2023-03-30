import * as React from 'react'
import { useEffect } from 'react'
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native'
import { EDSIcon, EDSText } from '@ui-kit/components'
import { IEDSToastProps, IToastInternalConfig } from '@ui-kit/components'
import { getThemeColor } from '@utils'

import { getStyle } from './EDSToast.styles'
import { getLeftIconColor, getLeftIconName } from './EDSToast.utils'

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

const offset = 16

const shadowDefault = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 1,
}

/**
 * @param {IEDSToastProps} props
 * @return {JSX}
 * @constructor
 */
const EDSToast = (props: IEDSToastProps & IToastInternalConfig) => {
  const {
    animationType,
    duration,
    theme,
    hideIcon,
    iconColor,
    iconName,
    id,
    index,
    intent,
    message,
    onClose,
    onPress,
    position,
    shouldVibrate,
    subMessage,
    toastStyles,
    hideCloseIcon,
    iconSize,
    shadow = shadowDefault,
    viewType,
  } = props
  const styles = getStyle(theme)
  const isBottom = position === 'BOTTOM'
  const topOffset = offset + 60 * (index || 0)
  const animation = React.useRef(new Animated.Value(0)).current
  const isSmallToast = viewType == 'small'
  const isCloseHideIcon = hideCloseIcon || isSmallToast

  const leftIconName = getLeftIconName(intent, iconName, viewType)
  const leftIconColor = getLeftIconColor(intent, iconColor, theme)

  const translateY = animation.interpolate({
    inputRange: [0, 0.5],
    outputRange: [isBottom ? topOffset : -topOffset, 0],
  })

  const scale = animation.interpolate({
    inputRange: [0, 0.5],
    outputRange: [0.8, 1],
    extrapolate: 'clamp',
  })

  const opacity = animation.interpolate({
    inputRange: [0, 0.5],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  /**
   * @return {RNStyleType}
   */
  const getStyles = () => {
    const otherStyle = isSmallToast ? {} : shadow
    switch (animationType) {
      case 'fade':
        return { opacity, ...otherStyle }
      case 'scale':
        return { transform: [{ scale }], opacity, ...otherStyle }
      default:
        return { transform: [{ translateY }, { scale }], ...otherStyle }
    }
  }

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0.5,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (duration !== 0) {
        const timer = setTimeout(() => {
          if (index === 0) {
            clearTimeout(timer)
          }
          id && onClose && onClose(id)
        }, duration)
      }
    })
    if (shouldVibrate) {
      Vibration.vibrate(10)
    }
  }, [])

  return (
    <AnimatedTouchable
      onPress={() => {
        onPress && onPress()
        onClose && id && onClose(id)
      }}
      style={StyleSheet.flatten([
        styles.container,
        getStyles(),
        isSmallToast ? styles.smallContainer : undefined,
        toastStyles,
      ])}
    >
      {!hideIcon && leftIconName && (
        <View style={styles.iconContainer}>
          <EDSIcon
            iconSize={iconSize || 36}
            iconColor={leftIconColor}
            iconName={leftIconName}
          />
        </View>
      )}
      <View
        style={StyleSheet.flatten([
          styles.messages,
          isSmallToast ? styles.smallToastMessages : undefined,
        ])}
      >
        <EDSText
          textType={'desktop-font-body'}
          color={
            isSmallToast ? getThemeColor('SMALL_TOAST_TEXT', theme) : undefined
          }
        >
          {message}
        </EDSText>
        {!!subMessage && (
          <EDSText textType={'desktop-font-notes'}>{subMessage}</EDSText>
        )}
      </View>
      {!isCloseHideIcon && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => onClose && id && onClose(id)}
        >
          <EDSIcon iconSize={20} iconName={'close'} iconColor={'black'} />
        </TouchableOpacity>
      )}
    </AnimatedTouchable>
  )
}

export default EDSToast

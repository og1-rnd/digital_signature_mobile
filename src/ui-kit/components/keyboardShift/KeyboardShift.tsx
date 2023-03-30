import React, { useEffect, useState } from 'react'
import {
  Animated,
  Dimensions,
  EmitterSubscription,
  Keyboard,
  KeyboardEvent,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native'
import { height as responsiveHeight } from '@utils'

import { IKeyboardShiftProps } from './KeyboardShift.types'

/**
 * @description IOS кастомная реализация KeyboardAvoidingView
 * преимущества данной реализации заключается в том-что контент
 * поднимается ровно элемента находящегося в фокусе который тригерит клавиатуру
 * Для андроида данная процедура не требуется так как ОС умеет делать это сама
 * @param {IKeyboardShiftProps} props
 * @constructor
 */
const KeyboardShift = (props: IKeyboardShiftProps) => {
  const {
    children,
    style,
    disabledKeyboardDismiss = false,
    enabled = true,
    ...otherProps
  } = props

  // Задача начального значения анимации
  const [shift] = useState(new Animated.Value(0))

  // Установка слушателя клавиатуры на поднятие
  const [didShowListener, setDidShowListener] =
    useState<EmitterSubscription | null>()

  // Установка слушателя клавиатуры на скрытие
  const [didHideListener, setDidHideListener] =
    useState<EmitterSubscription | null>()

  useEffect(() => {
    if (Platform.OS === 'ios' && enabled) {
      setDidShowListener(
        Keyboard.addListener('keyboardWillShow', handleKeyboardDidShow),
      )
      setDidHideListener(
        Keyboard.addListener('keyboardWillHide', handleKeyboardDidHide),
      )
    }
    return () => {
      if (didShowListener) {
        didShowListener.remove()
      }
      if (didHideListener) {
        didHideListener.remove()
      }
    }
  }, [])

  /**
   * @param {any} event
   * @description Подъем клавиатуры
   */
  const handleKeyboardDidShow = (event: KeyboardEvent) => {
    const { height: windowHeight } = Dimensions.get('window')
    const keyboardHeight = event.endCoordinates.height
    const currentlyFocusedInputRef = TextInput.State.currentlyFocusedInput()

    currentlyFocusedInputRef?.measure((x, y, width, height, pageX, pageY) => {
      const fieldHeight = height
      const fieldTop = pageY
      //  Spacing между keyboard и textInput (разница значений из-за клав)
      const spacing = responsiveHeight(5)

      //  Измеряем гэп на который нужно поднять контент
      const gap =
        windowHeight - keyboardHeight - (fieldTop + fieldHeight) - spacing
      if (gap >= 0) {
        return
      }

      Animated.timing(shift, {
        toValue: gap,
        duration: 500,
        useNativeDriver: true,
      }).start()
    })
  }

  /**
   * @description Обработка касания по области контейнера
   */
  const onResponderReleaseContainer = () => {
    Keyboard.dismiss()
  }

  /**
   * @description Получение разрешения на обработку касания по контейнеру
   * по умолчанию метод всегда должен отдавать true
   * @return {isKeyBoardDismiss}
   */
  const onStartShouldSetResponderContainer = (): boolean => {
    return !disabledKeyboardDismiss
  }

  /**
   * @description Скрытие клавиатуры
   */
  const handleKeyboardDidHide = () => {
    Animated.timing(shift, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }

  return (
    <Animated.View
      {...otherProps}
      style={StyleSheet.flatten([
        { transform: [{ translateY: shift }] },
        style,
      ])}
      onResponderRelease={onResponderReleaseContainer}
      onStartShouldSetResponder={onStartShouldSetResponderContainer}
    >
      {children}
    </Animated.View>
  )
}
export default KeyboardShift

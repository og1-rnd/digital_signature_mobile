import React, { useRef } from 'react'
import { Animated, Easing, View } from 'react-native'
import { BlueLoadSvg, WhiteLoadSvg } from '@assets/img/Button'
import { EDSIcon } from '@ui-kit/components'

import { IButtonElemProps } from './ButtonElem.types'

/**
 * @description компонент для иконок кнопки
 * @param {IButtonProps} props
 * @constructor
 */
const ButtonElem = (props: IButtonElemProps) => {
  const { isLoading, iconName, iconSize, iconColor, style, loaderType, theme } =
    props

  const spinValue = useRef(new Animated.Value(0)).current

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  Animated.loop(
    Animated.sequence([
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]),
  ).start()

  return (
    <View style={[style]}>
      {isLoading ? (
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <>
            {loaderType == 'white' && <WhiteLoadSvg />}
            {loaderType == 'blue' && <BlueLoadSvg />}
          </>
        </Animated.View>
      ) : (
        <EDSIcon
          theme={theme}
          iconName={iconName ?? 'copy'}
          iconSize={iconSize}
          iconColor={iconColor}
        />
      )}
    </View>
  )
}

export default ButtonElem

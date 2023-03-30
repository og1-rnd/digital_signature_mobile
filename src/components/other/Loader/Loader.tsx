import React, { useRef } from 'react'
import { Animated, Easing, View } from 'react-native'
import { LargeLoaderSvg } from '@assets/img/Loader'
import { EDSText } from '@ui-kit/components'

import getStyle from './Loader.styles'
import { ILoaderProps } from './Loader.types'

/**
 * @description компонент Loader
 * @return { JSX }
 * @param { ILoaderProps } props
 */
const Loader = (props: ILoaderProps) => {
  const { theme, isLoading, text } = props
  const styles = getStyle(theme)

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

  return isLoading ? (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <LargeLoaderSvg />
        </Animated.View>
        {text && (
          <EDSText theme={theme} textType={'desktop-title'} style={styles.text}>
            {text}
          </EDSText>
        )}
      </View>
    </View>
  ) : null
}

export default Loader

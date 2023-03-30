import React from 'react'
import { StyleSheet, View } from 'react-native'
import { EDSText } from '@ui-kit/components'
import { getThemeColor } from '@utils'

import getStyle from './StatusBar.styles'
import { IStatusBarProps } from './StatusBar.types'

/**
 * @description статус бар с шагами
 * @param { IStatusBarProps } props
 * @return { JSX }
 */
const StatusBar = (props: IStatusBarProps) => {
  const { theme, count, activeStep, title } = props
  const styles = getStyle(theme)

  const array = Array(count).fill({})
  const arrayLength = array?.length ?? 0

  return (
    <View style={styles.container}>
      <EDSText theme={theme} textType={'desktop-h2'}>
        {title}
      </EDSText>
      <View style={styles.steps}>
        {array.map((item, index) => {
          const isLast = index == arrayLength - 1
          const currentNumber = index + 1
          const isActive = currentNumber == activeStep

          return (
            <View
              key={`circle-${index}`}
              style={StyleSheet.flatten([
                styles.circleContainer,
                isLast ? styles.lastCircleContainer : undefined,
              ])}
            >
              <View
                style={StyleSheet.flatten([
                  styles.circle,
                  isActive ? styles.activeCircle : undefined,
                ])}
              >
                <EDSText
                  textType={'desktop-font-body'}
                  isTertiary
                  color={
                    isActive
                      ? getThemeColor('ACTIVE_STATUS_TEXT', theme)
                      : undefined
                  }
                >
                  {currentNumber}
                </EDSText>
              </View>
              {!isLast && <View style={styles.line} />}
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default StatusBar

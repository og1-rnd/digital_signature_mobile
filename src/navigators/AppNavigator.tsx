import React from 'react'
import { HomeStack } from '@navigators'
import { DarkTheme, NavigationContainer, Theme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { getThemeColor } from '@utils'

import { AppNavigatorPropsTypes, IScreen } from './NavigatorTypes'

const Stack = createStackNavigator()

// настройка роутинга для диплинков
const config = {
  screens: {
    HomeStack: {
      initialRouteName: 'Home',
      screens: {
        Settings: 'settings',
        Home: 'home/:initMessage',
      },
    },
  },
}

const linking = {
  prefixes: ['eds://'],
  config: config,
}

/**
 * @description - Base navigation wrapper
 * @param {object} props
 * @param {function} props.forwardRef
 * @param {function} props.onReady
 * @constructor
 */
const AppNavigator = (props: AppNavigatorPropsTypes) => {
  const { forwardRef, themeApp } = props

  const screenList: Array<IScreen> = [
    { name: 'HomeStack', component: HomeStack },
  ]

  /**
   * @param {any} list
   * @return {Array<React.ReactNode>}
   */
  const renderNavigationScreen = (list: Array<IScreen>) => {
    return list.map((item, index) => (
      <Stack.Screen key={`screen-${index}`} {...item} />
    ))
  }

  /**
   * @description Необходимо для установления фона стэка навигатора при
   * переключении тем приложения, чтобы при переходе по стэку не появлялась
   * белая линия у левого края экрана.
   * @return {Theme}
   */
  const setTheme = (): Theme => {
    return {
      dark: DarkTheme.dark,
      colors: {
        ...DarkTheme.colors,
        background: getThemeColor('APP_BACKGROUND', themeApp),
      },
    }
  }

  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        navigatorRef != null && forwardRef(navigatorRef)
      }}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore тут у библиотеки проблемы с типами поэтому ругается
      linking={linking}
      theme={setTheme()}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {renderNavigationScreen(screenList)}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

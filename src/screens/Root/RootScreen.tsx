import React from 'react'
import { useColorScheme, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppNavigator, NavigationService } from '@navigators'
import { NavigatorRefType } from '@navigators/NavigatorTypes'
import { EDSToastProvider } from '@ui-kit/components/toast'

import getStyle from './RootScreen.styles'

/**
 * @description - Основной скрин приложения
 * @constructor
 */
const RootScreen = () => {
  const theme = useColorScheme()
  const styles = getStyle(theme)

  return (
    <SafeAreaProvider>
      <EDSToastProvider>
        <View style={styles.container}>
          <AppNavigator
            forwardRef={(navigatorRef: NavigatorRefType) => {
              navigatorRef != null &&
                NavigationService.setTopLevelNavigator(navigatorRef)
            }}
            themeApp={theme}
          />
        </View>
      </EDSToastProvider>
    </SafeAreaProvider>
  )
}
export default RootScreen

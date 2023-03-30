import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '@screens/Home'
import { defaultHeaderStyle } from '@ui-kit/styles'

const Stack = createStackNavigator()

/**
 * @description home stack
 * @constructor
 */
const HomeStack = () => {
  const theme = 'light'
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...defaultHeaderStyle,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        initialParams={{ theme: theme }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  )
}
export default HomeStack

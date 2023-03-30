import { INavigateParams, NavigatorRefType } from '@navigators/NavigatorTypes'
import { CommonActions, StackActions } from '@react-navigation/native'
/**
 * The navigation is implemented as a service so that it can be used
 * outside of components, for example in sagas.
 *
 * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */
let navigator: NavigatorRefType

/**
 * This function is called when the RootScreen is created to set the navigator
 * instance to use.
 * @param {NavigatorRefType} navigatorRef
 */
function setTopLevelNavigator(navigatorRef: NavigatorRefType) {
  navigator = navigatorRef
}
/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param {string} routeName The name of the route to navigate to. Routes
 * are defined in RootScreen using createStackNavigator()
 * @param {object} params Route parameters.
 * @param {string} key The identifier for the route to navigate to.
 */
function navigate(routeName: string, params?: INavigateParams, key?: string) {
  const secondScreen = params?.screen
  const customParams = { ...params, screen: secondScreen }

  routeName &&
    navigator.dispatch(() => {
      return CommonActions.navigate({
        name: routeName,
        params: customParams,
        key,
      })
    })
}

/**
 * @description - на предыдущий экран
 */
function back() {
  navigator.dispatch(CommonActions.goBack())
}

/**
 * Call this function when you want to navigate to a specific route AND reset
 * the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect
 * from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param {string}  nameStack
 * @param {string}  routeName The name of the route to navigate to. Routes are
 * defined in RootScreen using createStackNavigator()
 * @param {object}  params Route parameters.
 */
function navigateAndReset(
  nameStack: string,
  routeName?: string,
  params?: object,
) {
  nameStack &&
    navigator.dispatch(
      CommonActions.reset({
        index: 0,
        routes: nameStack
          ? [{ name: nameStack, params: { screen: routeName, params } }]
          : [{ name: nameStack }],
      }),
    )
}

/**
 * Call this function if you want to replace the current screen with some other.
 *
 * This means that you are removing the current route from the navigation stack,
 * replacing it with a new one
 *
 * @param {string} routeName The name of the route to navigate to. Routes are
 * defined in RootScreen using createStackNavigator()
 * @param {object} params Route parameters.
 */
function replace(routeName: string, params: object) {
  navigator.dispatch(() => {
    return StackActions.replace(routeName, params)
  })
}

export default {
  navigate,
  navigateAndReset,
  setTopLevelNavigator,
  back,
  replace,
}

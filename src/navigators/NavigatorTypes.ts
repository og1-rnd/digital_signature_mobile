import {
  NavigationContainerRef,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native'
import { ThemeType } from '@utils'

export type NavigatorRefType = NavigationContainerRef<Object>

export type NavigationType = NavigationProp<ParamListBase>

export type AppNavigatorPropsTypes = {
  forwardRef: Function
  themeApp?: ThemeType
}

export interface INavigateParams {
  [key: string]: any
  screen?: string
  initial?: boolean
  params?: IUniversalParams
}
interface IUniversalParams {
  [key: string]: any
}

export interface IScreen {
  name: string
  component: () => JSX.Element
  params?: object
}

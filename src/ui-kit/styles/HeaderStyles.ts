import { StackNavigationOptions } from '@react-navigation/stack'

/**
 * Обобщенный тип навигационных свойств
 */
type GeneralizedNavigationType = StackNavigationOptions

export const defaultHeaderStyle: GeneralizedNavigationType = {
  headerTransparent: true,
  headerBackTitleVisible: false,
  headerTitleAllowFontScaling: true,
}

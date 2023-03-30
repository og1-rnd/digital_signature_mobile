import { PressableProps } from 'react-native'
import { HeaderType, RNStyleType, ThemeType } from '@utils'

export interface IEDSHeaderButton extends PressableProps {
  theme?: ThemeType
  style?: RNStyleType
  headerType?: HeaderType
  iconName?: string
  onButtonPress?: () => void
  side: 'left' | 'right'
}

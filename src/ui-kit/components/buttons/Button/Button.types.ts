import { ReactNode } from 'react'
import { PressableProps } from 'react-native'
import { IButtonsOptions, RNStyleType, ThemeType } from '@utils'
import { ButtonsPresets } from '@utils/Buttons/CreateButtonStyles'


export interface IButtonProps extends PressableProps {
  children?: ReactNode
  buttonPreset?: ButtonsPresets
  options?: IButtonsOptions
  isLoading?: boolean
  style?: RNStyleType
  theme?: ThemeType
}

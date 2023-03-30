import { ThemeType } from '@utils'

export interface IStatusBarProps {
  theme: ThemeType
  count: number
  activeStep: number
  title?: string
}

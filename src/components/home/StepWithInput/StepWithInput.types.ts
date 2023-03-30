import { ThemeType } from '@utils'

export interface IStepWithInputProps {
  theme: ThemeType
  title: string
  placeholder?: string
  rules: Array<string>
  value: string
  setValue: (value: string) => void
  inputType?: 'area'
  isDisableNextButton?: boolean
  onNextButtonPress: () => void
  onPrevButtonPress?: () => void
}

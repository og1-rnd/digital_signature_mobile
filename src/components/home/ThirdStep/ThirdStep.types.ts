import { ThemeType } from '@utils'

export interface IThirdStepProps {
  theme: ThemeType
  message: string
  mnemonic: string
  onSign: () => void
  onPrevButtonPress: () => void
}

import { ThemeType } from '@utils'

export interface ISignResultProps {
  theme: ThemeType
  address: string
  signature: string
  onCopy: () => void
  goToStart: () => void
}

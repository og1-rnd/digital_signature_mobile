import { INavigateParams } from '@navigators/NavigatorTypes'

export interface IHomeScreenProps {
  route: INavigateParams
}

export type signStatusType = 'preparation' | 'loading' | 'signed'

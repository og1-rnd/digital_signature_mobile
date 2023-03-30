import React from 'react'
import { View } from 'react-native'

import getStyle from './EDSCardWrapper.styles'
import { IEDSCardWrapperProps } from './EDSCardWrapper.types'

/**
 * @description обертка карточки
 * @param { IEDSCardWrapperProps } props
 * @return { JSX }
 */
const EDSCardWrapper: React.FC<IEDSCardWrapperProps> = (props) => {
  const { theme, children } = props
  const styles = getStyle(theme)

  return <View style={styles.container}>{children}</View>
}

export default EDSCardWrapper

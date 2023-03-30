import { StyleSheet } from 'react-native'
import { height, radius } from '@utils'

export default StyleSheet.create({
  baseButtonStyle: {
    borderRadius: radius(100),
    height: height(48),
    alignItems: 'center',
    justifyContent: 'center',
    padding: height(10),
  },
  baseIconButtonStyle: {
    padding: height(16),
  },
  bottomTabOpacity: {
    opacity: 0.8,
  },
})

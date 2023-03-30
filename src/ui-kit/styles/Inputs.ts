import { StyleSheet } from 'react-native'
import { height, radius, sp } from '@utils'

/**
 *
 */
export default StyleSheet.create({
  input: {
    fontSize: sp(18),
    paddingVertical: height(10),
    paddingHorizontal: height(12),
  },
  inputContainer: {
    borderRadius: radius(8),
    borderWidth: height(1),
  },
})

import { StyleSheet } from 'react-native'
import { Constants } from '@configurations'
import { sp } from '@utils'

export default StyleSheet.create({
  baseFontStyle: {
    lineHeight: sp(24),
    fontSize: sp(18),
  },
  black: {
    fontFamily: Constants.APP_FONT_FAMILY.SourceSansPro_Black,
  },
  bold: {
    fontFamily: Constants.APP_FONT_FAMILY.SourceSansPro_Bold,
  },
  semiBold: {
    fontFamily: Constants.APP_FONT_FAMILY.SourceSansPro_SemiBold,
  },
  regular: {
    fontFamily: Constants.APP_FONT_FAMILY.SourceSansPro_Regular,
  },
  light: {
    fontFamily: Constants.APP_FONT_FAMILY.SourceSansPro_Light,
  },
  extraLight: {
    fontFamily: Constants.APP_FONT_FAMILY.SourceSansPro_ExtraLight,
  },
})

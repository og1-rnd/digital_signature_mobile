import React from 'react'
import { View } from 'react-native'
import { EDSButton, EDSCardWrapper, EDSText } from '@ui-kit/components'
import { isEmpty } from '@utils'

import getStyle from './ThirdStep.styles'
import { IThirdStepProps } from './ThirdStep.types'

/**
 * @description карточка третьего шага
 * @param { IThirdStepProps } props
 * @return { JSX }
 */
const ThirdStep = (props: IThirdStepProps) => {
  const { theme, message, mnemonic, onSign, onPrevButtonPress } = props
  const styles = getStyle()

  const isDisableSignButton = isEmpty(message) || isEmpty(mnemonic)

  const resultItems = [
    {
      title: 'Мнемоника',
      value: mnemonic,
    },
    {
      title: 'Информация для подписания',
      value: message,
    },
  ]

  return (
    <EDSCardWrapper theme={theme}>
      <>
        {resultItems.map((item, index) => (
          <View key={`${item.value}-${index}`} style={styles.resultItem}>
            <EDSText
              theme={theme}
              textType={'desktop-font-body'}
              isSecondary
              style={styles.resultItemTitle}
            >
              {item.title}
            </EDSText>
            <EDSText
              theme={theme}
              textType={'adaptive-h3'}
              numberOfLines={6}
              ellipsizeMode={'middle'}
            >
              {item.value}
            </EDSText>
          </View>
        ))}
      </>
      <EDSButton
        theme={theme}
        title={'Сформировать цифровую подпись'}
        isDisabled={isDisableSignButton}
        onPress={onSign}
      />
      <EDSButton
        theme={theme}
        style={styles.backButton}
        isBorder
        title={'Назад'}
        onPress={onPrevButtonPress}
      />
    </EDSCardWrapper>
  )
}

export default ThirdStep

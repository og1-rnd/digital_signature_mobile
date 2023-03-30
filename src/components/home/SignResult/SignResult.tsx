import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { EDSButton, EDSCardWrapper, EDSIcon, EDSText } from '@ui-kit/components'

import getStyle from './SignResult.styles'
import { ISignResultProps } from './SignResult.types'

/**
 * @description результат обработки сообщения
 * @param { ISignResultProps } props
 * @return { JSX }
 */
const SignResult = (props: ISignResultProps) => {
  const { theme, address, signature, onCopy, goToStart } = props
  const styles = getStyle()
  const [closeItemIndex, setCloseItemIndex] = useState<Array<number>>([])

  const resultItems = [
    {
      title: 'Публичная часть ключа',
      value: address,
      canClose: true,
    },
    {
      title: 'Электронная цифровая подпись',
      value: signature,
    },
  ]

  /**
   * @param {number} index
   */
  const onClose = (index: number) => {
    if (closeItemIndex.indexOf(index) == -1) {
      setCloseItemIndex([...closeItemIndex, index])
    } else {
      setCloseItemIndex(closeItemIndex.filter((item) => item != index))
    }
  }

  return (
    <EDSCardWrapper theme={theme}>
      <EDSText theme={theme} textType={'desktop-h3'} style={styles.title}>
        {
          'ЭЦП успешно сформирована. Скопируйте её и вставьте в соответствующее поле в Личном кабинете родителя.'
        }
      </EDSText>
      <>
        {resultItems.map((item, index) => {
          const { title, value, canClose } = item
          const isNoClose = closeItemIndex.indexOf(index) == -1
          return (
            <Pressable
              key={`${item.value}-${index}`}
              style={styles.resultItem}
              onPress={() => onClose(index)}
              disabled={!canClose}
            >
              <View style={styles.resultItemTitle}>
                <EDSText
                  theme={theme}
                  textType={'desktop-font-body'}
                  isSecondary
                >
                  {title}
                </EDSText>
                {canClose && (
                  <View
                    style={StyleSheet.flatten([
                      styles.icon,
                      isNoClose ? styles.revIcon : undefined,
                    ])}
                  >
                    <EDSIcon iconName={'short-arrow-down'} />
                  </View>
                )}
              </View>
              {isNoClose && (
                <EDSText theme={theme} textType={'adaptive-h3'}>
                  {value}
                </EDSText>
              )}
            </Pressable>
          )
        })}
      </>
      <EDSButton
        theme={theme}
        leftElem={'copy'}
        title={'Скопировать ЭЦП'}
        onPress={onCopy}
      />
      <EDSButton
        theme={theme}
        isBorder
        style={styles.backButton}
        title={'Сформировать ещё одну ЭЦП'}
        onPress={goToStart}
      />
    </EDSCardWrapper>
  )
}

export default SignResult

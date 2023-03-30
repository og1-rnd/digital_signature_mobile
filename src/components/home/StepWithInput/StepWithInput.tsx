import React from 'react'
import { View } from 'react-native'
import {
  EDSAreaInput,
  EDSButton,
  EDSCardWrapper,
  EDSInput,
  EDSText,
} from '@ui-kit/components'
import { height } from '@utils'

import getStyle from './StepWithInput.styles'
import { IStepWithInputProps } from './StepWithInput.types'

/**
 * @description карточка с инпутом
 * @param { IStepWithInputProps } props
 * @return { JSX }
 */
const StepWithInput = (props: IStepWithInputProps) => {
  const {
    theme,
    isDisableNextButton,
    title,
    placeholder,
    value,
    rules,
    inputType,
    setValue,
    onNextButtonPress,
    onPrevButtonPress,
  } = props
  const styles = getStyle(theme)
  const isShowBackButton = !!onPrevButtonPress

  return (
    <EDSCardWrapper theme={theme}>
      <EDSText
        theme={theme}
        textType={'desktop-font-body'}
        style={styles.title}
        isBold
      >
        {title}
      </EDSText>
      {rules.map((item) => (
        <View key={item} style={styles.ruleItem}>
          <View style={styles.dot} />
          <EDSText
            isSecondary
            theme={theme}
            textType={'desktop-font-body'}
            style={styles.ruleItemText}
          >
            {item}
          </EDSText>
        </View>
      ))}
      {inputType == 'area' ? (
        <EDSAreaInput
          theme={theme}
          EDSContainerStyle={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={setValue}
          scrollEnabled={true}
          inputStyle={{ height: height(100) }}
        />
      ) : (
        <EDSInput
          EDSContainerStyle={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={setValue}
        />
      )}
      <EDSButton
        theme={theme}
        title={'Далее'}
        isDisabled={isDisableNextButton}
        onPress={onNextButtonPress}
      />
      {isShowBackButton && (
        <EDSButton
          theme={theme}
          isBorder
          style={styles.backButton}
          title={'Назад'}
          onPress={onPrevButtonPress}
        />
      )}
    </EDSCardWrapper>
  )
}

export default StepWithInput

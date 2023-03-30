import 'react-native-get-random-values'
import '@ethersproject/shims'

import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { LogoWithTextSvg } from '@assets/img/General'
import {
  SignResult,
  StatusBar,
  StepWithInput,
  ThirdStep,
} from '@components/home'
import { Loader } from '@components/other'
import Clipboard from '@react-native-clipboard/clipboard'
import { EDSContainer, useToast } from '@ui-kit/components'
import { isEmpty } from '@utils'
import { mnemonicToSeedSync } from 'bip39'
import { ethers } from 'ethers'
import HDKey from 'hdkey'

import getStyle from './HomeScreen.styles'
import { IHomeScreenProps, signStatusType } from './HomeScreen.types'

const mnemonicRules = [
  '8 и более символов',
  'Фраза из нескольких (минимум 2) слов, позволяющая создать ключ и подписать информацию электронно-цифровой подписью. Указанную при генерации Заявления мнемонику необходимо сохранить, чтобы использовать в дальнейшем для подписания документов. При утрате мнемоники необходимо будет создать новое Заявление. Никому не сообщайте мнемонику, даже сотрудникам "Онлайн Гимназии №1"!',
]

const messageRules = [
  'Скопируйте в Личном кабинете родителя и вставьте в поле ниже информацию для подписания.',
]

/**
 * @description - home screen
 * @param {IHomeScreenProps} props
 * @constructor
 */
const HomeScreen = (props: IHomeScreenProps) => {
  const { route } = props
  // initMessage - сообщение, которое приходит из deeplink
  const { theme, initMessage } = route.params || {}

  const { toast } = useToast()

  const styles = getStyle()

  const [mnemonic, setMnemonic] = useState('')
  const [activeStep, setActiveStep] = useState(0)
  const [message, setMessage] = useState(initMessage)
  const [address, setAddress] = useState('')
  const [signature, setSignature] = useState('')

  const [status, setStatus] = useState<signStatusType>('preparation')

  /**
   * @description проверяем мнемонику на соответствие требованиям
   * @return {boolean}
   */
  const isValidMnemonic = () => {
    const trimMnemonic = mnemonic.trim()
    return (
      trimMnemonic?.replace(' ', '')?.length >= 8 &&
      trimMnemonic.split(' ').length > 1
    )
  }

  const isDisableNextButtonFirstStep = isEmpty(mnemonic) || !isValidMnemonic()
  const isDisableNextButtonSecondStep = isEmpty(message)

  /**
   * @description генерируем кошелек, адрес и подписываем сообщение
   */
  const createSign = () => {
    const seed = mnemonicToSeedSync(mnemonic.trim())
    const node = HDKey.fromMasterSeed(seed)
    const derivedNode = node.derive(ethers.utils.defaultPath)
    const wallet = new ethers.Wallet(derivedNode.privateKey.toString('hex'))
    const { address } = wallet
    setAddress(address)
    setStatus('signed')
    wallet.signMessage(message.trim()).then((res) => setSignature(res))
  }

  /**
   * setTimeout нужен для того, что бы setStatus успел отработать и включился лоадер,
   * так как криптографические вычисления роняют поток рендера(
   */
  const onSign = () => {
    setStatus('loading')
    setTimeout(createSign, 0)
  }

  /**
   * @description переход на следующий шаг
   */
  const onNextButtonPress = () => {
    if (activeStep < 2) {
      setActiveStep(activeStep + 1)
    }
  }

  /**
   * @description переход на предыдущий шаг
   */
  const onPrevButtonPress = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

  /**
   * @description сброс и переход на начальное состояние
   */
  const goToStart = () => {
    setMnemonic('')
    setMessage('')
    setSignature('')
    setAddress('')
    setStatus('preparation')
    setActiveStep(0)
  }

  /**
   *
   */
  const onCopy = () => {
    Clipboard.setString(signature ?? '')
    toast({ message: 'Скопировано', viewType: 'small' })
  }

  /**
   * @description получаем компонент в зависимости от того на каком шаге находимся
   * @return {JSX}
   */
  const getStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <StepWithInput
            theme={theme}
            title={'Введите мнемонику'}
            value={mnemonic}
            setValue={setMnemonic}
            rules={mnemonicRules}
            onNextButtonPress={onNextButtonPress}
            isDisableNextButton={isDisableNextButtonFirstStep}
          />
        )
      case 1:
        return (
          <StepWithInput
            theme={theme}
            title={'Введите информацию для подписания'}
            value={message}
            setValue={setMessage}
            rules={messageRules}
            inputType={'area'}
            onNextButtonPress={onNextButtonPress}
            onPrevButtonPress={onPrevButtonPress}
            isDisableNextButton={isDisableNextButtonSecondStep}
          />
        )
      case 2:
        return (
          <ThirdStep
            theme={theme}
            message={message.trim()}
            mnemonic={mnemonic.trim()}
            onPrevButtonPress={onPrevButtonPress}
            onSign={onSign}
          />
        )
    }
  }

  useEffect(() => {
    if (initMessage) {
      setMessage(initMessage)
    }
  }, [initMessage])

  return (
    <EDSContainer paddingHorizontal={27}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <LogoWithTextSvg />
        </View>
        {status == 'preparation' && (
          <>
            <StatusBar
              theme={theme}
              count={3}
              activeStep={activeStep + 1}
              title={'Подписание документа'}
            />
            {getStep()}
          </>
        )}
        {status == 'loading' && (
          <Loader isLoading text={'Формируется цифровая подпись'} />
        )}
        {status == 'signed' && (
          <SignResult
            theme={theme}
            signature={signature}
            address={address}
            onCopy={onCopy}
            goToStart={goToStart}
          />
        )}
      </View>
    </EDSContainer>
  )
}

export default HomeScreen

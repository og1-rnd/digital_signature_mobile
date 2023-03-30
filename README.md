<div align="center">
    <h1 align="center">ЭЦП</h1>
</div>

## Запуск

Убедитесь, что у вас есть настроенная среда разработки React Native, Android Studio для Android-приложения и XCode для iOS, если нет, вы можете следовать этому [руководству](https://reactnative.dev/docs/environment-setup).

Чтобы собрать приложение, выполните следующие команды:

```bash
# клонируем репозиторий
git clone https://github.com/og1-rnd/digital_signature_mobile.git

# устанавливаем зависимости
npm install

# запускаем iOS
npm run pod
npm run ios

# запускаем андроид
npm run android
```
Если при сборке iOS через XCode вы получите ошибку
```
Command
PhaseScriptExecution failed with a nonzero exit code
```
В папке ios создайте файл .xcode.env.local и укажите путь до node
```
export NODE_BINARY="%ваш путь%"
```
Узнать путь можно с помощью команды
```bash
which node
```
В конечном итоге содержимое файла .xcode.env.local, должно выглядеть примерно так
```
export NODE_BINARY="/opt/homebrew/opt/node@14/bin/node"
```

## Redux core

Для подлючения Redux-core нужно:

- клонировать репозиторий в общую папку с мобильным и web приложением
- перейти в директорию - cd /promoboss-client-core
- создать глобальную ссылку - npm link
- перейти в директорию приложения - cd ../promoboss-client-mobile
- Добавить ссылку на redux-core в node_modules - npm link promoboss-client-core
- Теперь файлы из директории redux-core можно подключать - import { signIn, logIn } from 'promoboss-client-core/actions/auth'

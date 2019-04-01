# About
Шестнадцатая и семнадцатая домашняе работы в потоке javascript-2018-10 OTUS

# Description
16. User Interface для приложения запоминания иностранных слов
Реализовать `UI` приложения
- Создать компоненты для добавления текста/слов в словарь
- Разработать компоненты и формы для тренировки запоминания слов
- Добавить экран настройку приложения, сохранять состояние
17. Routing для приложения запоминания иностранных слов
Добавить routing, ссылки на страницы и переходы между компонентами приложения.
Добавить и актуализировать тесты для компонент приложения, настроить universal рендеринг приложения.

# How to
1. Клонируем репозиторий 
  `git clone https://github.com/georgius1024/supermemo.git`
2. Переходим в папку supermemo
  `cd supermemo`
3. запускаем npm, произойдет установка зависимостей
  `npm i`
4. запускаем dev-server
  `npm run start`
5. При первом запуске приложение предложит отобрать новые слова для изучения. Уже известные слова можно выбрасывать.
6. В закладке "слова для изучения" - изучаемые слова. На каждой тренировке из них выбирается порция, которая изучается. Количество слов, изучаемых на одной тренировке настраивается.
7. Тренировка проходит по сценарию:
  * Сначала показывается список слов, отобранных для сегодняшней тренировки (количество слов настраивается)
  * Для разминки предлагается простое упражнение - соотнести слова и перевод
  * Потом по каждому слову из списка выполняется серия заданий: перевод на русский, перевод на английский, spelling.
  * После нескольких тренировок (количечство настраивается), слово считается изученным, уходит из раздела "слова для изучения" в "изученные".
  * если при выполнении заданий происходят ошибки, количество необходимых тренировок для этого слова возрастает.

# HW16
  * Переформатировал сервисы. Текстовый сервис разделен на базовый CourseService - полный список слов, загружаемый по HTTP и на сервис WorkbookService, отвечающий за хранение и обработку изучаемых слов, хранящий состояние в LocalStorage.
  * Рутинг по-прежему рудиментарный - главная страница и "настройки". Тренировка сделана на Popup, что более подходит к случаю.
  * Делать тесты для Angular - сложнее, чем ожидал. Чтобы сгенерированные тесты хотя бы запускались, пришлось повозиться.

# HW17
  * Передалана структура папок
  * Добавлено произнесение слов (tts)
  * Изменены тесты

# Notes
  * Основная идея - изучив несколько тысяч высокочастотных слов, можно в дальнейшем пополнять словарь естественным путем, без заучивания.
  * Проект был создан с помощью Clarity Design System https://clarity.design
  * Список слов с http://studynow.ru/dicta/allwords/
  * Использован алгоритм изучения слов Supermemo. Ну, почти...

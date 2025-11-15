# Tickets Redux Task

Live: https://SanyBlagorodny.github.io/Tickets-Redux-Task/

## О проекте
Одностраничное приложение для поиска и фильтрации авиабилетов на React с Redux Toolkit. Современный UI с темной/светлой темой и адаптивным дизайном для всех устройств.

## Основные возможности
- Поиск авиабилетов с фильтрацией по количеству пересадок
- Переключение между темной и светлой темой (сохраняется в localStorage)
- Полностью адаптивный дизайн для мобильных, планшетных и десктопных устройств
- Redux Toolkit для управления состоянием приложения
- Современный стеклянный UI с плавными анимациями
- Поддержка различных авиакомпаний с логотипами

## Технологии
- React 19 с TypeScript
- Redux Toolkit для state management
- Vite как сборщик и dev сервер
- SCSS для стилизации с CSS переменными для тем
- Motion для анимаций
- ESLint для контроля качества кода

## Требования
- Node.js 18+
- npm 9+

Проверка:
```bash
node -v
npm -v
```

## Установка
```bash
npm install
```

## Запуск в разработке
```bash
npm run dev
```
Откроется http://localhost:5173

## Сборка
```bash
npm run build
```
Сборка в папку `dist/`.

## Линтинг
```bash
npm run lint
```

## Структура проекта
```
src/
  app/                    # Корневые компоненты и настройки
    App.tsx              # Главный компонент приложения
    store.ts             # Настройка Redux store
  entities/              # Сущности (бизнес-логика)
    ticket/              # Сущность билета
  features/              # Фичи (UI компоненты с логикой)
    filters/             # Фильтрация билетов
    theme/               # Переключение темы
    tickets/             # Отображение билетов
  redux/                 # Redux слайсы
    ticketsSlice/        # Слайс для управления билетами
  shared/                # Общие ресурсы
    styles/              # Глобальные стили и темы
    assets/              # Изображения и SVG
  widgets/               # Виджеты (крупные UI компоненты)
    Header/              # Шапка приложения
    Main/                # Основной контент
```

## Хранение данных
- Тема приложения: `localStorage.theme`
- Состояние фильтров и билетов: Redux store

## Адаптивность
Приложение полностью адаптировано для:
- Мобильных устройств (320px - 480px)
- Планшетов (768px - 1200px)
- Десктопов (1200px+)

## Известные нюансы
- При первом запуске используется темная тема по умолчанию
- Все медиа-запросы оптимизированы для плавной адаптации между размерами экранов
- SCSS переменные используются для легкого управления темами

## Устранение неполадок
Порт занят - измените порт в Vite конфигурации или используйте:
```bash
# PowerShell
$env:PORT=3001; npm run dev

# CMD
set PORT=3001 && npm run dev
```

Ошибки зависимостей:
```bash
rm -rf node_modules package-lock.json
npm install
```

Проблемы со сборкой:
```bash
npm run build
# Проверьте логи на наличие ошибок TypeScript или ESLint
```

## Полезные ссылки
- [React Documentation](https://react.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

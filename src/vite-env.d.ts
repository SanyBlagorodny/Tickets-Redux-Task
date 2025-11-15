/// <reference types="vite/client" /> // Ссылка на типы Vite для поддержки импортов и других возможностей Vite в TypeScript

declare module "*.scss" {
  const content: Record<string, string> | string;
  export default content;
} // Объявление модуля для SCSS файлов - позволяет импортировать стили как объекты или строки

declare module "*.svg" {
  const src: string;
  export default src;
} // Объявление модуля для SVG файлов - позволяет импортировать SVG как строки

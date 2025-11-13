/// <reference types="vite/client" />

declare module "*.scss" {
  const content: Record<string, string> | string;
  export default content;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

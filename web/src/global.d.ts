// declaration.d.ts
declare module "*.scss" {
  const styles: { [className: string]: string }
  export default styles
}

declare module "*.module.scss" {
  const content: { [className: string]: string }
  export default content
}

declare module "*.svg" {
  const content: any
  export default content
}

declare module "react-tiny-swiper" {
  const content: any
  export default content
}

declare module "react-hubspot-form" {
  const content: any
  export default content
}

declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

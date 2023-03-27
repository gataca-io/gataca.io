export interface LinkModel {
  id: string
  label: string
  route?: string
  categories?: LinkModel[]
  subRoutes?: LinkModel[]
  action?: (...args: any[]) => {}
}

export interface ButtonModel {
  label: string
  icon?: string
  outlined?: boolean
  className?: any
  action: (x?: any) => void
}
export interface IconModel {
  id: string
  alt: string
  icon: string
  route?: string
}

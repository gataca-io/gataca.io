export interface LinkModel {
  id: string
  label: string
  route?: string
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

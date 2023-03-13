export interface LinkModel {
  id?: string
  label: string
  route?: string
  subRoutes?: LinkModel[]
  action?: (...args: any[]) => {}
}

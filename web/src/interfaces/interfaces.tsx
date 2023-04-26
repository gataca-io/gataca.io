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
  url?: string
  action: (x?: any) => void
}
export interface IconModel {
  id: string
  alt: string
  icon: string
  route?: string
}

export interface BlogPreviewModel {
  id: string
  attributes: BlogModel
}

export interface BlogModel extends BlogPreviewModel {
  date: string
  previewImage: StrapiImageModel
  timeReading?: number
  title: string
  slugURL: string
  category: {
    data: {
      attributes: {
        name: string
      }
    }
  }
  heroImage: any
  content: string
}

export interface StrapiImageModel {
  data: {
    attributes: {
      url: string
      alternativeText?: string
      caption?: string
    }
  }
}

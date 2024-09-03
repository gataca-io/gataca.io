export interface LinkModel {
  id: string
  label: string
  route?: string
  categories?: LinkModel[]
  subRoutes?: LinkModel[]
  mainRoute?: LinkModel[]
  action?: (...args: any[]) => {}
}

export interface ButtonModel {
  label: string
  icon?: string
  IconComponent?: any
  outlined?: boolean
  className?: any
  url?: string
  fileName?: string
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

export interface PagePreviewModel {
  id: string
  attributes: PageModel
}

export interface BlogModel extends BlogPreviewModel {
  seo: SeoModel
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

export interface PageModel extends PagePreviewModel {
  seo: SeoModel
  sections: InsideSectionsModel[]
  title: string
  slugURL: string
  subPath: string
  location: any
}

export interface InsideSectionsModel {
  id: any
  title: string
  description: string
  cta?: ButtonModel
  rightButton?: any
  leftButton?: any
  hero?: any
  icon?: any
  media?: any
  content?: string
  __component?: string
  subtitle?: string
  benefits?: any
  advantages?: any
  operations?: any
  faqs?: any
  blogs?: any
  logos?: any
  tiers?: any
  panelTitle?: string
  paragraph_1?: string
  paragraph_2?: string
  button?: ButtonModel
  infoToggles?: string
}
export interface SeoModel {
  id: string
  metaTitle: string
  metaDescription: string
  keywords?: string
  canonicalURL?: string
  rrssImg?: StrapiImageModel
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

export interface IProductModel {
  id: string
  attributes: {
    name: string
    description: string
    prices: IPriceModel[]
    type?: string
    features?: IProductFeaturesModel
    subPriceMonthLabel?: string
    subPriceYearLabel?: string

    button: {
      label: "Contact us"
      outsideWeb: false
      url: "/company/contact"
    }
  }

  name: string
  description: string
  prices: IPriceModel[]
  type?: string
  features?: IProductFeaturesModel
  subPriceMonthLabel?: string
  subPriceYearLabel?: string

  button: {
    label: "Contact us"
    outsideWeb: false
    url: "/company/contact"
  }
}

export interface IPriceModel {
  id: string
  name: string
  currency: string
  recurringInterval: string
  amount: number
  type: string
}

export interface IProductFeaturesModel {
  verificationTemplates?: number | string
  activeUsers?: number | string
  issuanceTemplates?: number | string
  issuedCredentials?: number | string
  dids: string
  apiKeys: string
  notifications: string[]
  stadistics: boolean
  nFactor: string[]
  didPublicCatalogue: boolean
  newSchemaPublicCatalogue: string
  customQR: string
  support: string
  slas: boolean
  credentialsInW3CFormat: boolean
  sandBoxEnvironment: boolean
  ebsiIntegration: boolean
  customGDPRPurposes: boolean
  credentialsInISO28013: boolean
  integrationCustomTrustFrameworks: boolean
  integrationCustomTrustInfraestructure: boolean
  standardSupport: boolean | string
  premierSupport: boolean | string
  dataAgreements: boolean | string
  verifiableIds: boolean | string
  customSchemas: boolean | string
  sandboxEnvironment: boolean | string
  extraCredentials: boolean | string
}

export interface ImageModel {
  src: string
  alt: string
}

export interface OptionModel {
  text: string
  value: string
}

export interface InfoTogglesPricingModel {
  verificationTemplate: string
  activeUser: string
  issuanceTemplate: string
  issuedCredential: string
  securityFactorMechanism: string
  sandboxEnvironment: string
  didInPublicCatalogue: string
  schemaInPublicCatalogue: string
  ebsiIntegration: string
  integrationCustomFrameworks: string
  integrationCustomInfraestructure: string
  dataAgreements: string
  verifiableIds: string
  customSchemas: string
  extraCredentials: string
  ageVerification: string
  qualifiedCertificates: string
  enterpriseWallet: string
}
export interface LegalModel {
  seo: SeoModel
  pageContent: {
    date: {
      date: string
      dateText: string
    }
    title: string
    introSectionText?: string
    contentSectionItem: {
      description: string
      title: string
      idName: string
      id: string
    }[]
  }
}

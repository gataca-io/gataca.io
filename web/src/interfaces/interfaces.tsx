export interface LinkModel {
  id: string
  label: string
  route?: string
  categories?: LinkModel[]
  subRoutes?: LinkModel[]
  mainRoute?: LinkModel[]
  action?: (...args: any[]) => {}
}

export interface ButtonModelOld {
  label?: string
  icon?: string
  IconComponent?: any
  outlined?: boolean
  className?: any
  url?: string
  fileName?: string
  action: (x?: any) => void
}

export interface ButtonModel {
  idButton?: string
  label?: string
  icon?: any
  IconComponent?: any
  className?: any
  url?: string
  action?: (x?: any) => void
  link?: boolean
  style?: string
  color?: string
  size?: string
  disabled?: boolean
  outsideWeb?: boolean
  noPaddingText?: boolean
}

export interface SegmentedButtonModel {
  id: string
  label: string
  index: number
  icon?: any
  selected: boolean
  showItem: (x: number) => void
  color?: string
  size?: string
  disabled?: boolean
  outsideWeb?: boolean
  noPaddingText?: boolean
}

export interface IconModel {
  id: string
  alt: string
  icon: string
  route?: string
}

export interface ChipModel {
  idChip?: string
  text?: string
  action?: (x?: any) => void
  type?: string
  form?: string
  color?: string
  leadingIcon?: any
  trailingIcon?: any
  chipSize?: string
  disabled?: boolean
}

export interface SegmentedChipModel {
  index: number
  id: string
  text?: string
  selected: boolean
  showItem: (x: number) => void
  type?: string
  form?: string
  color?: string
  leadingIcon?: any
  trailingIcon?: any
  chipSize?: string
  disabled?: boolean
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
  locale?: string
  localizations?: LocalizationsModel
}

export interface InsideSectionsModel extends CardModel {
  id: any
  idContent?: string
  title: string
  description: string
  switchLabel?: string
  cta?: ButtonModel
  rightButton?: any
  leftButton?: any
  hero?: any
  icon?: any
  media?: any
  content?: string | any
  __component?: string
  subtitle?: string
  benefits?: any
  advantages?: any
  operations?: any
  faqs?: any
  blogs?: any
  logos?: any
  tiers?: any
  infoToggles?: string
  pricing_categories?: any
  tier_tables?: any
  feature_details?: any
  tiersDetail?: any
  contents?: any
  card_table_contents?: any
  idButton?: string
  label?: string
  url?: string
  link?: boolean
  style?: string
  color?: string
  size?: string
  disabled?: boolean
  outsideWeb?: boolean
  noPaddingText?: boolean
  buttons?: any
  chip_options?: any
  upperIconOpened?: any
  upperIconClosed?: any
  trailingIcon?: any
  titleCard?: string
  titleContent?: string
  contentAlign?: string
  dynamicCard?: boolean
  moreContent?: string
}

export interface LocalizationsModel {
  data: [
    {
      attributes: {
        locale: string
        slugURL: string
        subPath: string
      }
    }
  ]
}
export interface SeoModel {
  id: string
  metaTitle: string
  metaDescription: string
  keywords?: string
  canonicalURL?: string
  rrssImg?: StrapiImageModel
  alternateURL?: {
    data: {
      attributes: {
        url: string
        hreflangLocale: string
      }
    }[]
  }
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
    popular: boolean

    button: ButtonModel
  }

  name: string
  description: string
  prices: IPriceModel[]
  type?: string
  features?: IProductFeaturesModel
  subPriceMonthLabel?: string
  subPriceYearLabel?: string

  button: ButtonModel
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
  statistics: boolean
  nFactor: string[]
  didPublicCatalogue: boolean
  newSchemaPublicCatalogue: string
  customQR: string
  support: string
  slas: string
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
  customLimits: boolean | string
  advanceFunctionalities: boolean | string
  ageVerification: string
  appIntegrations: string
  didMethods: string
  trustRegistries: string
  enterpriseWallet: string
  qualifiedCertificates: boolean | string
  roleBasedAccessControl: boolean
  customRoles: boolean
  ticketingSystem: boolean
  slackSupport: boolean
  accountTeam: boolean
  twentyFourSeven: string
  onboardingTraining: string
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

export interface CardModel {
  idCard?: string
  size?: string
  contentAlign?: string
  upperIconOpened?: any
  upperIconClosed?: any
  numberIconText?: number
  chip?: ChipModel
  mainIcon?: any
  title?: string
  content?: any
  button?: ButtonModel
  dynamicCard?: boolean
  moreContent?: string
}

export interface ActionCardModel {
  idActionCard?: string
  titleCard?: string
  upperIconOpened?: any
  upperIconClosed?: any
  chip?: ChipModel
  titleContent?: string
  content?: any
  button?: ButtonModel
  trailingIcon?: any
}

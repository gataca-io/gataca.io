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
  onMouseEnterAction?: (x?: any) => void
  fullWidth?: boolean
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
  link?: boolean
  url?: string
}

export interface IconModel {
  id: string
  alt: string
  icon: string
  route?: string
}

export interface ChipModel {
  className?: string
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
  selected?: boolean
  showItem?: (x: number) => void
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
  idItem?: string
  chip?: ChipModel
  button?: ButtonModel
  showChip?: boolean
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
  pageContext?: string
}

export interface InsideSectionsModel {
  switchLabel?: string
  icon?: any
  content?: string | any
  __component?: string
  logos?: any
  infoToggles?: string
  headingOnPremise?: any
  tier_tables?: any
  contents?: any
  card_table_contents?: any
  color?: string
  buttons?: any
  chip_options?: any
  selector_list?: any
  brand_buttons?: any
  heading?: any
  image?: StrapiImageModel
  idItem?: string
  loop?: boolean
  lightLogos?: boolean
  layout?: string
  sizeSlot?: string
  textAlign?: string
  video?: any
  employee?: any
  avatarSize?: string
  sub_heading?: any
  highlight_card?: any
  dynamic_cards?: any
  background?: boolean
  bgVerticalAlign?: string
  mainTitleIllustration?: StrapiImageModel
  selectorIllustration?: StrapiImageModel
  headingSelector?: any
  selectorAlign?: string
  button?: ButtonModel
  logoContainer?: any
  blogHighlightCardContainer?: any
  blogsAll?: any
  allCategory?: string
  buttonLeft?: ButtonModel
  buttonRight?: ButtonModel
  cards?: any
  cardWidth?: number
  cardHeight?: number
  credentials?: any
  testimonial_card?: any
  blockAlign?: string
  slotAlign?: string
  align?: string
  media_steps?: any
  showSwitch?: boolean
  button_icons?: any
  pricing?: any
  titleFeaturesTableMobile?: string
  showAllFeaturesText?: string
  hideAllFeaturesText?: string
  headings?: any
  buttonIcon?: ButtonModel
  employees?: any
  centerText?: boolean
  columns?: string
  card?: any
  fullWidthCard?: any
  headingSlot?: any
  formId?: string
  formRegion?: string
  showForm?: boolean
  action_cards?: any
  marginBottom?: boolean
  headingRight?: boolean
  imageOutsideFrame?: boolean
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
  className?: string
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
  selected: boolean
  showItem: (x: any) => void
  index: number
  subOptionClickedID?: string
}

export interface PricingCardModel {
  className?: string
  idItem?: string
  titleAmountSize?: string
  lists?: any
  name?: string
  description?: string
  frecuencyYearly?: string
  frecuencyMonthly?: string
  amountMonthly?: number
  amountYearly?: number
  customPrice?: string
  button?: ButtonModel
  extraInfo?: string
  period?: string
}
export interface PhotoCardModel {
  className?: string
  idItem?: string
  employee?: {
    attributes: EmployeeInfoModel
  }
  buttonIcon?: ButtonModel
}
export interface ListModel {
  idList?: string
  size?: string
  leadingIcon?: any
  title?: string
  extraInfo?: string
  color?: string
  url?: string
  classNameButton?: string
  noPaddingText?: boolean
}

export interface SubHeadingModel {
  idSubHeading?: string
  size?: string
  align?: string
  numberIconText?: number
  icon?: any
  title?: string
  content?: string
}

export interface HeadingModel {
  className?: string
  idItem?: string
  titleSize?: string
  align?: string
  chip?: ChipModel
  extraText?: string
  sectionName?: string
  title?: string
  content?: string
  button?: any
  buttonGroup?: any
  lists?: any
  table?: any
  showForm?: boolean
  formRegion?: string
  formId?: string
}

export interface SelectorModel {
  index: number
  idSelector?: string
  title?: string
  content?: any
  showSelector?: boolean
  selected: boolean
  showItem: (x: number) => void
}

export interface HeaderContainerModel {
  idItem?: string
  heading: HeadingModel
  image?: any
  centerText?: boolean
  showForm?: boolean
  formRegion?: string
  formId?: string
  headingRight?: boolean
  imageOutsideFrame?: boolean
}

export interface SubHeadingContainerModel {
  className?: string
  idItem?: string
  subHeading: SubHeadingModel[]
  columns?: string
}

export interface MainCardContainerModel {
  card?: CardModel[]
  pricing?: PricingCardModel[]
  columns?: string
}

export interface PhotoCardContainerModel {
  idItem?: string
  photoCard?: EmployeeInfoModel[]
  buttonIcon?: ButtonModel
}

export interface CredentialModel {
  className?: string
  idItem?: string
  chip?: ChipModel
  color?: string
  iconSize?: string
  logoSize?: string
  icon?: any
  logo?: any
  actionItemText?: string
  actionItemIcon?: any
  headingCredential?: any
  headingCredentialHeader?: boolean
}

export interface TestimonialCardModel {
  className?: string
  idItem?: string
  content?: string
  image?: any
  name?: string
  workTitle?: string
  color?: string
}

export interface MenuModel {
  attributes: {
    idItem?: string
    className?: string
    logo?: any
    menuDropdown?: any
    button?: any
    backButtonMobile?: ButtonModel
    iconBackButtonMobile?: StrapiImageModel
    iconMenuOptionsMobile?: StrapiImageModel
    languageButton?: ButtonModel
    languageOptions?: any
  }
}

export interface FooterModel {
  attributes: {
    idItem?: string
    className?: string
    logo?: any
    certificationImage?: any
    linksList?: any
    languageButton?: ButtonModel
    languageOptions?: any
    termsButton?: any
    socialMediaButton?: any
    rightsReserved?: string
  }
}

export interface EmployeeInfoModel {
  name: string
  role: string
  linkedinRoute: string
  portrait: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

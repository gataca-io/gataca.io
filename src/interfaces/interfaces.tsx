import {
  Direction,
  TooltipAlignment,
} from "carbon-components-react/typings/shared"
import { FunctionComponent, SVGProps } from "react"

export interface IProductModel {
  id: string
  name: string
  description: string
  prices: IPriceModel[]
  type?: string
  features?: IProductFeaturesModel
}

export interface IProductFeaturesModel {
  verificationTemplates?: number | string
  activeUsers?: number | string
  activeUsersInfo?: string
  issuanceTemplates?: number | string
  issuedCredentials?: number | string
  issuedCredentialsInfo?: string
  dids: string
  apiKeys: string
  apiKeysInfo?: string
  notifications: string[]
  stadistics: boolean
  nFactor: string[]
  didPublicCatalogue: boolean
  newSchemaPublicCatalogue: string
  customQR: string
  support: string
  slas: boolean
}

export interface IPriceModel {
  id: string
  name: string
  currency: string
  recurringInterval: string
  amount: number
  type: string
}

export interface ButtonModel {
  label: string
  image?: ImageModel
  svgIcon?: FunctionComponent<SVGProps<SVGSVGElement>>
  function?: ((x?: any) => void) | any | Function
}

export interface ImageModel {
  src: string
  alt: string
}

export interface OptionModel {
  text: string
  value: string
}

export interface TooltipPositionModel {
  align: TooltipAlignment
  direction: Direction
}

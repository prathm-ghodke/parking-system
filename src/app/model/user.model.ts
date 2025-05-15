export interface ResponseModel {
    message: string
    result: boolean
    data: any
}

export interface ISite {
  siteId: number
  clientId: number
  clientName: string
  siteName: string
  siteCity: string
  siteAddress: string
  sitePinCode: string
  totalBuildings: number
  createdDate: string
}


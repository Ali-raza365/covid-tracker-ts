export type AllCountries = {
     name: string
     iso2: string
     iso3: string
 }
  export type CountryData={
     confirmed: number
     recovered: number
     deaths: number
     lastUpdate:string
  }

  export type DailyData ={
     confirmed:number
     deaths:number
     date:string
  }
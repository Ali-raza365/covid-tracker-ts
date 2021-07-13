import axios, { AxiosPromise, AxiosResponse } from "axios";
import { AllCountries, CountryData, DailyData } from "../Types/types";

const GlobalStats:string = "https://covid19.mathdro.id/api" ;
const Allcountries :string = "https://covid19.mathdro.id/api/countries";
const GetCountry  :string= "https://covid19.mathdro.id/api/countries/";
const DailyData_url :string = "https://covid19.mathdro.id/api/daily";

const getAllData = async (): Promise<CountryData >   =>{
  try {
    let response = await axios.get(GlobalStats);
    let data = await response.data;
    let contories : CountryData ={
     confirmed:data.confirmed.value,
     recovered:data.recovered.value,
     deaths:data.deaths.value,
     lastUpdate:data.lastUpdate
  }
    return  contories
  } catch (error) {
    console.log(error);
    throw(error)
  }
};
const getALLCountries = async () : Promise<AllCountries[]>  => {
  try {
    let response = await axios.get(Allcountries);
    let data = await response.data.countries;
// let countories= data.map((contry:AllCountries)=>{
//      return{name:contry.name}
// })
    return data;
  } catch (error) {
    console.log(error);
    throw(error)
  }
};

const getdailyData = async () : Promise<DailyData[] > => {
  try {
    let response = await axios.get(DailyData_url);
    let data = await response.data;
    let modifiedData = data.map((daily:any) => ({
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
    throw(error)
  }
};

const getCountry = async (country:string):Promise<CountryData > => {
  try {
    let response = await axios.get(GetCountry + country);
    let data = await response.data;
  let countrydata : CountryData ={
     confirmed:data.confirmed.value,
     recovered:data.recovered.value,
     deaths:data.deaths.value,
     lastUpdate:data.lastUpdate
  }
    return countrydata;
  } catch (error) {
    console.log(error);
    throw(error)
  }
};

export { getAllData, getALLCountries, getCountry, getdailyData };

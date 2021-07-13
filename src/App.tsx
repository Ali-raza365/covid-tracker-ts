// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import { CountryData, DailyData } from './Types/types'
import NavBar from "./Components/Navbar";
import Cards from "./Components/Card";
import Chart from "./Components/Chart";
import CountryPicker from "./Components/CountryPicker";
import { CircularProgress } from "@material-ui/core";
import { getAllData, getCountry, getdailyData } from "./services/api";

const App: React.FC = () => {
  const [AllStatedata, setAllStatedata] = useState<any>();
  const [loading, setloading] = useState(false);
  const [country, setCountry] = useState<string>("all");
  const [Chartdata, setChartdata] = useState<DailyData[]>();

  const handleChange = async (event: any, val: string) => {
    event.preventDefault()
    setloading(true);
    if (val != "all") {
      let res = await getCountry(val);
      setAllStatedata(res);
    } else {
      let res = await getAllData();
      setAllStatedata(res);
      let daily = await getdailyData();
      setChartdata(daily);
    }
    setCountry(val);
    setloading(false);
  };

  useEffect(() => {
    async function fetchdata(): Promise<void> {
      setloading(true);
      let res = await getAllData();
      setAllStatedata(res);
      let daily = await getdailyData();
      setChartdata(daily);
      setloading(false);
    }
    fetchdata();
  }, []);
  return (
    <>
      <div className="App">
        <NavBar />
        {!loading ? (
          <>
            <Cards AllStatedata={AllStatedata} />
            <CountryPicker handleChange={handleChange} country={country} />
            <Chart data={Chartdata} country={country} AllStateData={AllStatedata} />
          </>
        ) : (
          <div className="loading">
            <CircularProgress color="secondary" size="7rem" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

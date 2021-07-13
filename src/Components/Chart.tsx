import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { CountryData, DailyData } from "../Types/types";

interface AppProps {
  data: DailyData[] | undefined,
  country: string,
  AllStateData: CountryData
}

const Chart: React.FC<AppProps> = ({ AllStateData, data, country }) => {
  return (
    <div className="barChart">
      {country !== "all" ? (
        <Bar
          type="bar"
          data={{
            labels: ["Infected", "Recovered", "Deaths"],
            datasets: [
              {
                label: "People",
                backgroundColor: [
                  "#f7a440",
                  "#4aa96c ",
                  " #fa1e0e",
                ],
                data: [
                  AllStateData.confirmed,
                  AllStateData.recovered,
                  AllStateData.deaths,
                ],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: {
              display: true,
              text:
                country == "all" ? `Global ` : `Current Country is ${country}`,
            },
          }}
        />
      ) : (
        data && (
          <Line
            type="line"
            data={{
              type: '',
              labels: data.map((item: DailyData) => item.date),
              datasets: [
                {
                  label: "Infacted",
                  data: data.map((item: DailyData) => item.confirmed),
                  fill: true,
                  backgroundColor: "rgba(17, 105, 142, 0.3)",
                  borderColor: "rgba(17, 105, 142, 1)",
                },
                {
                  label: "Deaths",
                  data: data.map((item: DailyData) => item.deaths),
                  fill: true,
                  borderColor: "#fa1e0e",
                  backgroundColor: "rgba(250, 30, 14, 0.4)",
                },
              ],
            }}
          />
        )
      )}
    </div>
  );
}

export default Chart;

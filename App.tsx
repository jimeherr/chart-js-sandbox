import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { enUS } from "date-fns/locale";
import "chartjs-adapter-date-fns";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const
    },
    title: {
      display: true,
      text: "Chart.js Line Chart"
    }
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "Travel (%)"
      },
      suggestedMin: 0,
      suggestedMax: 100
    },
    x: {
      adapters: {
        date: {
          locale: enUS
        }
      },
      title: {
        display: true,
        text: "Time (sec)"
      },
      type: "time",
      time: {
        unit: "second",
        displayFormats: {
          second: "SS"
        }
      },
      suggestedMin: "2023-09-21 00:00:00",
      suggestedMax: "2023-09-21 00:01:00"
    }
    //   x: {
    //     type: "time",
    //     min: "2023-09-21 00:00:00",
    //     max: "2023-09-21 00:01:00",
    //     time: { units: "month" }
    //   }
  }
};

const labels = []; // ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      data: [
        { x: "2023-09-21 00:00:10", y: 10 },
        { x: "2023-09-21 00:00:20", y: 15 }
      ]
    }
    // {
    //   label: "Dataset 1",
    //   data: labels.map(() => faker.datatype.number({ min: -5, max: 105 })),
    //   borderColor: "rgb(255, 99, 132)",
    //   backgroundColor: "rgba(255, 99, 132, 0.5)"
    // },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)"
    // }
  ]
};

export function App() {
  return <Line options={options} data={data} />;
}

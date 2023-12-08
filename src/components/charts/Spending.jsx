import React from "react"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { faker } from "@faker-js/faker"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },

  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Yearly Spending",
      color: "#ffff",
      font: {
        size: 16,
        weight: "bold",
      },
    },
    legend: {
      display: false, // Set to false to hide the legend
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        color: "#ffff",
      },
      ticks: {
        color: "white",
        // Change this color to your desired label color
      },
      display: false,
    },
    y: {
      grid: {
        display: false,
      },
      type: "linear",
      display: false,
      position: "left",
      ticks: {
        color: "white", // Change this color to your desired label color
      },
    },
    y1: {
      grid: {
        display: false,
      },
      type: "linear",
      display: false,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        color: "white", // Change this color to your desired label color
      },
    },
  },
}

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Septmeber",
  "October",
  "November",
  "December",
]

export const data = {
  labels,
  datasets: [
    {
      tension: 0.6,
      label: "$ spent",
      data: labels.map(() => faker.datatype.number({ min: 800, max: 5000 })),
      borderColor: "#F1D00A",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      yAxisID: "y",
      fill: true,
      borderWidth: 2,
    },
  ],
}

export function SpendingChart() {
  return <Line options={options} data={data} />
}

// SpendingChart.jsx

import React from "react"
import { Line } from "react-chartjs-2"
import { faker } from "@faker-js/faker"

const generateRandomData = () => {
  return Array.from({ length: 12 }, () =>
    faker.datatype.number({ min: 800, max: 5000 })
  )
}

const chartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "dollars spent",
      tension: 0.6,
      data: generateRandomData(),
      borderColor: "#F1D00A",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderWidth: 2,
      yAxisID: "y",
      fill: true,
    },
  ],
}

const options = {
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
      display: false,
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
        color: "white",
      },
    },
    y1: {
      grid: {
        display: false,
        drawOnChartArea: false,
      },
      type: "linear",
      display: false,
      position: "right",
      ticks: {
        color: "white",
      },
    },
  },
}

const SpendingChart = () => {
  return <Line data={chartData} options={options} />
}

export default SpendingChart

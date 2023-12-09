import React from "react"
import Chart from "react-apexcharts"
import { faker } from "@faker-js/faker"
import ReactApexChart from "react-apexcharts"

const generateRandomData = () => {
  return Array.from({ length: 12 }, () =>
    faker.datatype.number({ min: 800, max: 5000 })
  )
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

const chartData = {
  options: {
    chart: {
      height: "100%",
      width: "100%",
      toolbar: {
        show: false,
      },
      type: "area",
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 2000,
        },
      },
    },

    colors: ["#F1D00A", "#ffff"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: false,
    },
    xaxis: {
      show: false,
      categories: labels,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    legend: {
      show: true,
      fontFamily: `'Roboto', sans-serif`,
      position: "bottom",
      offsetX: 10,
      offsetY: 10,
      labels: {
        useSeriesColors: false,
        colors: ["#fff", "#ffff"],
      },
      markers: {
        width: 16,
        height: 16,
        radius: 5,
      },
      itemMargin: {
        horizontal: 15,
        vertical: 8,
      },
    },
  },

  series: [
    {
      tooltip: {
        theme: "dark",
      },
      name: "dollars spent",
      data: labels.map(() => faker.datatype.number({ min: 800, max: 5000 })),
    },
  ],
}

const SpendingChart = () => {
  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="area"
      height="100%"
      width="100%"
    />
  )
}

export default SpendingChart

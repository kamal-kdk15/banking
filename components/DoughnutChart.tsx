"use client"
import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({ accounts}: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [4800, 4500, 10000],
        backgroundColor: [
          '#0747b6', '#2265d8', '#2f91fa'
        ]
      }
    ],
    labels: ['HDFC', 'ICICI', 'SBI']
  }
  return (
   <Doughnut
   options={{
    cutout: '60%',
    plugins: {
      legend: {
        display: false
      }
    }
   }}
    data={data} />
  );
}

export default DoughnutChart


import React from 'react'
import { PolarArea } from 'react-chartjs-2';

function PolarAreaChart({ chartData }) {
  return <PolarArea data={chartData}/>
}

export default PolarAreaChart
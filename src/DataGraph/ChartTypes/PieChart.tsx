import React, { FC } from 'react';
import Chart from 'react-apexcharts'

type PieChartProps = {
  data: { [key: string]: number },
  className?: string
};

const PieChart: FC<PieChartProps> = ({ data, className }) => {

  const labels = Object.keys(data);
  const counts = Object.values(data);
  
  const options = {
    plotOptions: {
      pie: { donut: { size: '0%' }}
    },
    labels: labels,
    colors : ['#4059AD', '#97D8C4', '#F4B942', '#6A041D', '#397367', '#AD5D4E']
  }

  return (
    <div className={className}>
      <Chart options={options} series={counts} type="donut" height="400" width="600" />
    </div>
  );
}

export default PieChart;
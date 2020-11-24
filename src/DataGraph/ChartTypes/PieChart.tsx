import React, { FC } from 'react';
import Chart from 'react-apexcharts'

type PieChartProps = {
  data: { [key: string]: number }
};

const PieChart: FC<PieChartProps> = ({ data }) => {

  const labels = Object.keys(data);
  const counts = Object.values(data);
  
  const options = {
    plotOptions: {
      pie: { donut: { size: '0%' }}
    },
    labels: labels
  }

  return (
    <div>
      <Chart options={options} series={counts} type="donut" width="500" />
    </div>
  );
}

export default PieChart;
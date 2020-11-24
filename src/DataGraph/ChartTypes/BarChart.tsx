import React, { FC } from 'react';
import Chart from 'react-apexcharts'

type BarChartProps = {
  data: { [key: string]: number }
};

const BarChart: FC<BarChartProps> = ({ data }) => {

  const labels = Object.keys(data);
  const counts = Object.values(data);
  
  const options = {
    chart: {
      toolbar: { show: false }, // Hides ability to download chart
    },
    xaxis: { categories: labels },
    series: [{ data: counts }]
  };

  return (
    <div className="bar">
      <Chart options={options} series={options.series} type="bar" width="800" />
    </div>
  );
}

export default BarChart;
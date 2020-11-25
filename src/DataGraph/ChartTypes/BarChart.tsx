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
    tooltip: { enabled: false },
    dataLabels: { enabled: true },
    xaxis: { categories: labels },
    series: [{ data: counts }],
    colors : ['#4059AD', '#97D8C4', '#F4B942', '#6A041D', '#397367', '#AD5D4E']
  };

  return (
    <div>
      <Chart options={options} series={options.series} type="bar" height="400" />
    </div>
  );
}

export default BarChart;
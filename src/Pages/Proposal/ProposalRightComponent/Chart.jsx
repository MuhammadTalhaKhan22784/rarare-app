import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Option A', 'Option B', 'Option  C'],
  datasets: [
    {
      label: ' ',
      data: [20, 69, 80,],
      backgroundColor: [
       "#46C2A1",
       "#597AFA",
       "#EDA137"
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      // border:2,
    },
  ],
};

const options = {
  indexAxis: 'x',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: false,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const HorizontalBarChart = () => (
  <>
   
   <div >
       <Bar style={{fontSize:"20px"}}   data={data} />
   </div>
  </>
);

export default HorizontalBarChart;
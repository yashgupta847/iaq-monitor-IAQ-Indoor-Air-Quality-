import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartDisplay = ({ aqiData, labels }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "AQI Trend",
        data: aqiData,
        fill: false,
        borderColor: "blue",
        tension: 0.3,
        pointRadius: 3,
        pointBackgroundColor: "blue",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Air Quality Index (AQI) Over Time" },
    },
    scales: {
      y: { beginAtZero: true, max: 200 },
    },
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartDisplay;

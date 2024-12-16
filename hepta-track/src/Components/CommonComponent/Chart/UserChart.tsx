import React, { useState, useEffect } from 'react'
import { Chart } from 'primereact/chart'

const UserChart: React.FC = () => {
  const [chartData, setChartData] = useState({})
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement)
    const textColor = documentStyle.getPropertyValue('--text-color')
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border')
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'This year',
          data: [11598, 15000, 12000, 18000, 20000, 15000, 10000],
          borderColor: '#000000',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 1,
        },

        {
          label: 'Last year',
          data: [10500, 13000, 16000, 14000, 10000, 12000, 8000],
          borderColor: '#AEC7ED',
          backgroundColor: 'rgba(192, 192, 192, 0.1)',
          fill: false,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2,
          borderDash: [5, 5],
        },
      ],
    }
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
            font: {
              size: 12,
            },
            callback: function (value: number) {
              return value >= 1000 ? value / 1000 + 'K' : value
            },
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    }

    setChartData(data)
    setChartOptions(options)
  }, [])

  return (
    <div className="card mt-2 ml-4 p-4 rounded-lg shadow">
      <Chart type="line" data={chartData} options={chartOptions} />
    </div>
  )
}

export default UserChart

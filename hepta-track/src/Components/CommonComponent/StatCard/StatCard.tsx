import React from 'react'
import { Card } from 'primereact/card'

interface StatCardProps {
  percentage: string
  percentageColor: string
  icon: string
  value: string
  label: string
  width?: any
}

const StatCard: React.FC<StatCardProps> = ({
  percentage,
  percentageColor,
  icon,
  value,
  label,
  width,
}) => {
  return (
    <Card
      className={`p-4 rounded-lg ml-8 mr-4 mb-6 border border-[#D4D4D4] h-[160px] w-[${
        width ? width : '270px'
      }]`}>
      <div
        className={`flex items-center mb-2 rounded-lg border border-[#D4D4D4] w-[100px] h-[30px]`}>
        <span className={`text-sm font-semibold text-black ml-2`}>{percentage}</span>
        <img src={icon} alt="icon" className="w-[15px] h-[15px] ml-2" />
      </div>

      <div className="text-2xl font-bold">{value}</div>
      <div className="text-gray-700">{label}</div>
    </Card>
  )
}

export default StatCard

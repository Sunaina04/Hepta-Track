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
      className={`p-4 rounded-2xl ml-4  mb-6 border border-[#D4D4D4] h-[160px] w-[340px]`}>
      <div
        className={`flex items-center  rounded-md border border-[#D4D4D4] w-[90px] h-[30px] -mt-8 -ml-4`}>
        <span className={`text-sm font-semibold text-black`}>{percentage}</span>
        <img src={icon} alt="icon" className="w-[15x] h-[15px] ml-1" />
      </div>
      <div className="text-3xl font-bold  text-black mt-6 -ml-3">{value}</div>
      <div className="text-black text-xl -ml-3">{label}</div>
    </Card>
  )
}

export default StatCard

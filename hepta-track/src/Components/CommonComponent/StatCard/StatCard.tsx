import React from 'react'
import { Card } from 'primereact/card'
import { StatCardProps } from '../../../Type/ComponentBasedTypes'

const StatCard: React.FC<StatCardProps> = ({ percentage, percentageColor, icon, value, label }) => {
  return (
    <Card className="p-4 rounded-lg shadow ml-4 mr-6 w-[16rem]">
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-semibold ${percentageColor}`}>{percentage}</span>
        <i className={`pi ${icon} ${percentageColor}`}></i>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-gray-500">{label}</div>
    </Card>
  )
}

export default StatCard

import React from 'react'
import { Card } from 'primereact/card'

interface StatCardProps {
  percentage: string
  percentageColor: string
  icon: string
  value: string
  label: string
}

const StatCard: React.FC<StatCardProps> = ({ percentage, percentageColor, icon, value, label }) => {
  return (
    <Card className="p-4 rounded-lg shadow ml-8 mr-4">
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

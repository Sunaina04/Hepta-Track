import React from 'react'
import UserChart from '../CommonComponent/Chart/UserChart'
import Header from '../Sidebar/LayoutComponents/Header'
import StatCard from '../CommonComponent/StatCard/StatCard'
import Notifications from './Notifications'

const Dashboard: React.FC = () => {
  return (
    <>
      <Header header="DASHBOARD" />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            percentage="+11.01%"
            percentageColor="text-green-500"
            icon="pi-arrow-up"
            value="$2,554.00"
            label="Total Revenue"
          />
          <StatCard
            percentage="-0.03%"
            percentageColor="text-red-500"
            icon="pi-arrow-down"
            value="3,454"
            label="Active Users"
          />
          <StatCard
            percentage="+15.03%"
            percentageColor="text-green-500"
            icon="pi-arrow-up"
            value="156"
            label="Active Agents"
          />
          <StatCard
            percentage="+6.08%"
            percentageColor="text-green-500"
            icon="pi-arrow-up"
            value="2,541"
            label="Total Subscriptions"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UserChart />
          </div>
          <Notifications />
        </div>
      </div>
    </>
  )
}

export default Dashboard

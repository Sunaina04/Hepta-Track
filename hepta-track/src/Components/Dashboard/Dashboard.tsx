import React, { useState, useEffect } from 'react'
import UserChart from '../CommonComponent/Chart/UserChart'
import Header from '../Sidebar/LayoutComponents/Header'
import StatCard from '../CommonComponent/StatCard/StatCard'
import Notifications from './Notifications'
import { loadingBlur } from '../Utils/Style'
import { ProgressSpinner } from 'primereact/progressspinner'

const Dashboard: React.FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <> 
      <Header header="DASHBOARD" />
      <div className="p-6">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-4 -ml-1">
          <div>
          <StatCard
            percentage="+11.01%"
            percentageColor="#DFFDDF"
            icon="/assets/icons/arrowUp.png"
            value="$2,554.00"
            label="Total Revenue" 
          />
          </div>
          <div>
          <StatCard
            percentage="-0.03%"
            percentageColor="text-red-500"
            icon="/assets/icons/arrowDown.png"
            value="3,454"
            label="Active Users"
            
          />
          </div>
          <div >
          <StatCard
            percentage="+15.03%"
            percentageColor="text-green-500"
            icon="/assets/icons/arrowUp.png"
            value="156"
            label="Active Agents"
          
          />
          </div>
          <div>
          <StatCard
            percentage="+6.08%"
            percentageColor="text-green-500"
            icon="/assets/icons/arrowUp.png"
            value="2,541"
            label="Total Subscriptions"
          
          />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UserChart />
          </div>
          <Notifications />
        </div>
      </div>


      {isLoading && (
        <ProgressSpinner
        style={{
          position: 'absolute',
          top: '60%',
          left: '45%',
          transform: 'translate(-50%, -50%)',
          width: '50px',
          height: '50px',
        }}
        strokeWidth="4"
      />
      )}

    </>
  )
}

export default Dashboard

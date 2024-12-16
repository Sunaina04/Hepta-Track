import React from 'react'
import SidebarLayout from './Components/Sidebar/SidebarLayout'
import LoginForm from './Components/Login/LoginForm'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import Dashboard from './Components/Dashboard/Dashboard'
import UserManagement from './Components/UserManagement/UserManagement'
import AgentManagement from './Components/AgentManagement/AgentManagement'
import VehicleManagement from './Components/VehicleManagement/VehicleManagement'
import ExpenseManagement from './Components/ExpenseManagement/ExpenseManagement'
import SmartTractorKit from './Components/SmartTractorKit/SmartTractorKit'
import Subscriptions from './Components/Subscriptions/Subscriptions'
import AdsPromotions from './Components/AdsPromotions/AdsPromotions'
import InstructionalVideos from './Components/InstructionalVideos/InstructionalVideos'

const routes = [
  {
    path: '',
    element: <LoginForm />,
  },
  {
    path: 'login',
    element: <LoginForm />,
  },

  {
    path: 'resetPassword',
    element: <ResetPassword />,
  },
  {
    path: 'forgotPassword',
    element: '',
  },
  {
    path: '',
    element: <SidebarLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'userManagement',
        element: <UserManagement />,
      },
      {
        path: 'agentManagement',
        element: <AgentManagement />,
      },
      {
        path: 'vehicleManagement',
        element: <VehicleManagement />,
      },
      {
        path: 'expenseManagement',
        element: <ExpenseManagement />,
      },
      {
        path: 'smartTractorKit',
        element: <SmartTractorKit />,
      },
      {
        path: 'subscriptions',
        element: <Subscriptions />,
      },
      {
        path: 'adsPromotions',
        element: <AdsPromotions />,
      },
      {
        path: 'instructionalVideos',
        element: <InstructionalVideos />,
      },
    ],
  },
]

export default routes

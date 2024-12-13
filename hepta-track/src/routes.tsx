import React from 'react'
import LoginForm from './Components/Login/LoginForm'
import SidebarLayout from './Components/Sidebar/SidebarLayout'
import Dashboard from './Components/Dashboard/Dashboard'
import UserManagement from './Components/UserManagement/UserManagement'
import AgentManagement from './Components/AgentManagement/AgentManagement'
import VehicleManagement from './Components/VehicleManagement/VehicleManagement'
import ExpenseManagement from './Components/ExpenseManagement/ExpenseManagement'
import SmartTractorKit from './Components/SmartTractorKit/SmartTractorKit'
import Subscriptions from './Components/Subscriptions/Subscriptions'
import AdsPromotions from './Components/AdsPromotions/AdsPromotions'
import InstructionalVideos from './Components/InstructionalVideos/InstructionalVideos'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'


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
    element: <ForgotPassword />,
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
        element: <UserManagement/>,
        
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

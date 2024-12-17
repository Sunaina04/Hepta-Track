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
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import Subscriptions from './Components/CMSManagement/Subscriptions/Subscriptions'
import AdsPromotions from './Components/CMSManagement/AdsPromotions/AdsPromotions'
import InstructionalVideos from './Components/CMSManagement/InstructionalVideos/InstructionalVideos'
import General from './Components/CMSManagement/General/General'
import CMSManagement from './Components/CMSManagement/CMSManagement'

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
        path: 'cmsManagement',
        element: <CMSManagement />,
        children: [
          {
            path: 'general',
            element: <General />,
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
    ],
  },
]

export default routes

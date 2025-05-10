import React from 'react'
import { Card } from 'primereact/card'

const Notifications: React.FC = () => {
  const notifications = [
    { time: '5min ago', message: 'Lorem Ipsum Alert', code: 'PBXCMXXXXX' },
    { time: '5min ago', message: 'Lorem Ipsum Alert', code: 'PBXCMXXXXX' },
    { time: '5min ago', message: 'Lorem Ipsum Alert', code: 'PBXCMXXXXX' },
    { time: '5min ago', message: 'Lorem Ipsum Alert', code: 'PBXCMXXXXX' },
    { time: '5min ago', message: 'Lorem Ipsum Alert', code: 'PBXCMXXXXX' },
    { time: '5min ago', message: 'Lorem Ipsum Alert', code: 'PBXCMXXXXX' },
  ]

  return (
    <Card className="p-4 rounded-lg shadow mr-4">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className="mb-4 border-t border-gray-300 py-2">
            <span className="ml-5 text-gray-500 text-sm">{notification.time}</span>
            <div className="flex items-center">
              <span className="text-green-500 mr-2 text-sm leading-none">{'●'}</span>
              <span className="font-bold text-lg">{notification.message}</span>
            </div>
            <div className="ml-5 text-gray-500 text-sm">{notification.code}</div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default Notifications

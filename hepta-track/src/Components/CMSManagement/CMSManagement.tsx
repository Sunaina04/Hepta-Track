import { Outlet } from 'react-router-dom'

const CMSManagement = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflowY: 'auto',
      }}>
      <Outlet />
    </div>
  )
}

export default CMSManagement

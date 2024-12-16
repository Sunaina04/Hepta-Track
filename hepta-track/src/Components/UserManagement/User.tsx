import React, { useMemo } from 'react'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'

function User() {
  const columnStyle = {
    backgroundColor: '#082825',
    fontSize: '12px',
    fontWeight: '700',
    color: '#FFFFFF',
    padding: '15px',
  }

  const userColumns = useMemo(
    () => [
      {
        id: 'userId',
        label: 'ID',
        style: columnStyle,
      },
      {
        id: 'userName',
        label: 'Name',
        style: columnStyle,
      },
      {
        id: 'phoneNumber',
        label: 'Phone Number',
        style: columnStyle,
      },
      {
        id: 'email',
        label: 'Email Address',
        style: columnStyle,
      },
      {
        id: 'address',
        label: 'Address',
        style: columnStyle,
      },
      {
        id: 'subscriptionPlan',
        label: 'Subscription Plan',
        style: columnStyle,
      },
    ],
    // [allowExpansion],
    [],
  )

  const ActionButtonColumn: ActionButtonColumnProps = {
    header: 'Status',
    buttons: [
      {
        color: 'black',
        label: 'Active',
        underline: true,
        // onClick: (rowData) => {
        //   handleMooringTableRowClick(rowData)
        // },
      },
      {
        
        label: 'View/edit',
        underline: true,
        // onClick: (rowData) => {
        //   handleMooringTableRowClick(rowData)
        // },
      },
    ],
    headerStyle: { backgroundColor: '#082825', color: 'white' },
  }

  const dummyUserData = [
    {
      userId: 'U001',
      userName: 'John Doe',
      phoneNumber: '123-456-7890',
      email: 'johndoe@example.com',
      address: '123 Elm Street, Springfield, IL',
      subscriptionPlan: 'Premium',
    },
    {
      userId: 'U002',
      userName: 'Jane Smith',
      phoneNumber: '987-654-3210',
      email: 'janesmith@example.com',
      address: '456 Oak Avenue, Boulder, CO',
      subscriptionPlan: 'Basic',
    },
    {
        userId: 'U002',
        userName: 'Jane Smith',
        phoneNumber: '987-654-3210',
        email: 'janesmith@example.com',
        address: '456 Oak Avenue, Boulder, CO',
        subscriptionPlan: 'Basic',
      },
      {
        userId: 'U002',
        userName: 'Jane Smith',
        phoneNumber: '987-654-3210',
        email: 'janesmith@example.com',
        address: '456 Oak Avenue, Boulder, CO',
        subscriptionPlan: 'Basic',
      },
      {
        userId: 'U002',
        userName: 'Jane Smith',
        phoneNumber: '987-654-3210',
        email: 'janesmith@example.com',
        address: '456 Oak Avenue, Boulder, CO',
        subscriptionPlan: 'Basic',
      },
      {
        userId: 'U002',
        userName: 'Jane Smith',
        phoneNumber: '987-654-3210',
        email: 'janesmith@example.com',
        address: '456 Oak Avenue, Boulder, CO',
        subscriptionPlan: 'Basic',
      },
      {
        userId: 'U002',
        userName: 'Jane Smith',
        phoneNumber: '987-654-3210',
        email: 'janesmith@example.com',
        address: '456 Oak Avenue, Boulder, CO',
        subscriptionPlan: 'Basic',
      },
      {
        userId: 'U002',
        userName: 'Jane Smith',
        phoneNumber: '987-654-3210',
        email: 'janesmith@example.com',
        address: '456 Oak Avenue, Boulder, CO',
        subscriptionPlan: 'Basic',
      },
  ]

  return (
    <div>
      <div
        className={`bg-#00426F overflow-x-hidden h-[603px] mt-[3px] ml-[15px] mr-[15px] table-container flex flex-col rounded-t-lg`}>
        <div className="flex-grow overflow-auto">
          <DataTableComponent
            tableStyle={{
              fontSize: '12px',
              color: '#000000',
              fontWeight: 500,
              backgroundColor: '#FFFFFF',
              border:' 1px solid #D5E1EA',
              borderBottomLeftRadius:'10px'
            }}
            data={dummyUserData}
            //   selectionMode="single"
            //   onSelectionChange={(e: any) => {
            //     setSelectedMooring(e.value)
            //   }}
            //   selection={selectedMooring}
            rowStyle={(rowData: any) => rowData}
            dataKey="id"
            columns={userColumns}
            actionButtons={ActionButtonColumn}
            //   onRowClick={(e: any) => handleRowClickBoatYardDetail(e)}
            //   emptyMessage={
            //     <div className="text-center mt-14">
            //       <img
            //         src="/assets/images/empty.png"
            //         alt="Empty Data"
            //         className="w-20 mx-auto mb-4"
            //       />
            //       <p className="text-gray-500 text-lg font-bold">{properties.noDataMessage}</p>
            //     </div>
            //   }
          />
        </div>
      </div>
    </div>
  )
}

export default User
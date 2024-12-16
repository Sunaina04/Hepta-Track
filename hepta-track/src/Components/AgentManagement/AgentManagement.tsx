import StatCard from '../CommonComponent/StatCard/StatCard'
import CustomModal from '../CustomComponent/CustomModal'

import { AddNewButtonStyle, DialogStyle } from '../Utils/Style'
import { useMemo } from 'react'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
// import Header from '../Sidebar/LayoutComponents/Header'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'

const AgentManagement = () => {
  const columnStyle = {
    backgroundColor: '#082825',
    fontSize: '12px',
    fontWeight: '700',
    color: '#FFFFFF',
    padding: '15px',
  }

  const agentColumns = useMemo(
    () => [
      {
        id: 'userId',
        label: 'ID',
        style: columnStyle,
      },
      {
        id: 'userName',
        label: 'Agent Name',
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
        color:'green',
        label: 'View/edit',
        underline: true,
        // onClick: (rowData) => {
        //   handleMooringTableRowClick(rowData)
        // },
      },
    ],
    headerStyle: { backgroundColor: '#082825', color: 'white', fontSize:'12px' },
    style: {
      borderBottom: '1px solid #D5E1EA ',
      width: '150px',
      fontWeight: 700,
    },
  }

  const dummyUserData = [
    {
      userId: 'U001',
      userName: 'John Doe',
      phoneNumber: '123-456-7890',
      email: 'johndoe@example.com',
      address: '123 Elm Street, Springfield, IL',
    },
    {
      userId: 'U002',
      userName: 'Jane Smith',
      phoneNumber: '987-654-3210',
      email: 'janesmith@example.com',
      address: '456 Oak Avenue, Boulder, CO',
    },
    {
        userId: 'U002',
        userName: 'Jane Smith',
        phoneNumber: '987-654-3210',
        email: 'janesmith@example.com',
        address: '456 Oak Avenue, Boulder, CO',
      },
      {
        userId: 'U002',
        userName: 'Jane Smith',
        phoneNumber: '987-654-3210',
        email: 'janesmith@example.com',
        address: '456 Oak Avenue, Boulder, CO',
      },
      {
        userId: 'U002',
        userName: 'Jane Smith',
        phoneNumber: '987-654-3210',
        email: 'janesmith@example.com',
        address: '456 Oak Avenue, Boulder, CO',
      },
      {
        userId: 'U002',
        userName: 'Jane Smith',
        phoneNumber: '987-654-3210',
        email: 'janesmith@example.com',
        address: '456 Oak Avenue, Boulder, CO',
      },
      {
        userId: 'U002',
        userName: 'Jane Smith',
        phoneNumber: '987-654-3210',
        email: 'janesmith@example.com',
        address: '456 Oak Avenue, Boulder, CO',
      },
      {
        userId: 'U002',
        userName: 'Jane Smith',
        phoneNumber: '987-654-3210',
        email: 'janesmith@example.com',
        address: '456 Oak Avenue, Boulder, CO',
      },
  ]
  return (
    <>
      <Header header="AGENT MANAGEMENT" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
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
      </div>
      <div className="flex justify-end mr-12 ">
        <div className="flex mt-6 ">
          <CustomModal
            buttonText={'ADD NEW'}
            buttonStyle={AddNewButtonStyle}
            onHide={() => {}}
            icon={<img src="/assets/icons/Plus.png" alt="icon" className="w-3.8 h-3.8 ml-4" />}
            dialogStyle={{
              height: '580px',
              minHeight: '580px',
              overflowY: 'auto',
              ...DialogStyle,
            }}/>
          </div>
          </div>

      <div 
      className={`bg-#00426F overflow-x-hidden mt-[10px]  ml-[48px] mr-[32px] table-container flex flex-col rounded-t-lg`}>
        <div className="flex-grow overflow-auto h-[570px] rounded-b-[10px] border-[1px] border-[#D5E1EA]">
          <DataTableComponent
            tableStyle={{
              fontSize: '14px',
              color: '#000000',
              fontWeight: 500,
              backgroundColor: '#FFFFFF',
              // border:' 1px solid #D5E1EA',
              // borderBottomLeftRadius:'10px'
            }}
            data={dummyUserData}
            //   selectionMode="single"
            //   onSelectionChange={(e: any) => {
            //     setSelectedMooring(e.value)
            //   }}
            //   selection={selectedMooring}
            rowStyle={(rowData: any) => rowData}
            dataKey="id"
            columns={agentColumns}
            actionButtons={ActionButtonColumn}
            style={{ borderBottom: '1px solid #D5E1EA', fontWeight: '400',padding:'10px'}}
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
    </>
  )
}

export default AgentManagement

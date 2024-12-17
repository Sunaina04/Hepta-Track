import { useMemo, useState } from 'react'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'
import Header from '../Sidebar/LayoutComponents/Header'
import CustomModal from '../CustomComponent/CustomModal'
import { AddNewButtonStyle, DialogStyle } from '../Utils/Style'
import StatCard from '../CommonComponent/StatCard/StatCard'
import InputTextWithHeader from '../CommonComponent/InputTextWithHeader'
import AddUser from '../Add User/AddUser'

const UserManagement = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleButtonClick = () => {
    setModalVisible(true)
  }

  const columnStyle = {
    backgroundColor: '#082825',
    fontSize: '12px',
    fontWeight: '600',
    color: '#FFFFFF',
    padding: '14px',
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
        color: 'green',
        label: 'View/edit',
        underline: true,
        // onClick: (rowData) => {
        //   handleMooringTableRowClick(rowData)
        // },
      },
    ],
    headerStyle: { backgroundColor: '#082825', color: 'white', fontSize: '12px' },
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
    <>
      <Header header="USER MANAGEMENT" />

      <div className="flex flex-wrap items-center p-4 mb-2">
        {/* Stat Cards */}
        <div className="flex gap-6 w-1/2 md:w-1/3 lg:w-1/4">
          <StatCard
            percentage="+11.01%"
            percentageColor="text-green-500"
            icon="pi-arrow-up"
            value="$2,554.00"
            label="Total Revenue"
          />
        </div>
        <div className="flex gap-6 w-1/2 md:w-1/3 lg:w-1/4">
          <StatCard
            percentage="-0.03%"
            percentageColor="text-red-500"
            icon="pi-arrow-down"
            value="3,454"
            label="Active Users"
          />
        </div>

        {/* Search Input */}
        <div className="flex-grow lg:w-1/3 mt-36">
          <InputTextWithHeader
            placeholder="Search"
            inputTextStyle={{
              width: '100%',
              height: '44px',
              padding: '0 4rem 0 3rem',
              border: '1px solid #C5D9E0',
              fontSize: '16px',
              color: '#000000',
              borderRadius: '4px',
              minHeight: '44px',
              fontWeight: 400,
              backgroundColor: 'rgb(242 242 242 / 0%)',
            }}
            borderBottom={{ border: '1px solid #D5E1EA' }}
            iconStyle={{
              position: 'absolute',
              left: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '18px',
              height: '18px',
            }}
          />
        </div>

        {/* Add New Button */}
        <div className="flex justify-end lg:w-auto mt-44">
          <CustomModal
            buttonText={'ADD New'}
            buttonStyle={AddNewButtonStyle}
            onHide={() => {
              setModalVisible(false)
            }}
            visible={modalVisible}
            onClick={handleButtonClick}
            icon={<img src="/assets/icons/Plus.png" alt="icon" className="w-3.8 h-3.8 ml-2.5" />}
            children={<AddUser />}
            dialogStyle={{
              height: '580px',
              minHeight: '580px',
              overflowY: 'auto',
              ...DialogStyle,
            }}
          />
        </div>
      </div>

      <div
        className={`bg-#00426F overflow-x-hidden mt-[4px] ml-[48px] mr-[32px] table-container flex flex-col rounded-t-[10px]`}>
        <div className="flex-grow overflow-auto h-[570px] rounded-b-[10px] border-[1px] border-[#D5E1EA] ">
          <DataTableComponent
            tableStyle={{
              fontSize: '13px',
              color: '#000000',
              fontWeight: 600,
              backgroundColor: '#FFFFFF',
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
            style={{ borderBottom: '1px solid #D5E1EA', fontWeight: '400', padding: '10px' }}
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

export default UserManagement

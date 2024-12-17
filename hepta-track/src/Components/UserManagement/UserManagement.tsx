import { useMemo, useState } from 'react'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'
import Header from '../Sidebar/LayoutComponents/Header'
import CustomModal from '../CustomComponent/CustomModal'
import { AddNewButtonStyle, columnStyle, DialogStyle } from '../Utils/Style'
import StatCard from '../CommonComponent/StatCard/StatCard'
import InputTextWithHeader from '../CommonComponent/InputTextWithHeader'
import AddUser from '../Add User/AddUser'
import { dummyUserData } from '../Utils/DummyData'
import { Paginator } from 'primereact/paginator'
import { ProgressSpinner } from 'primereact/progressspinner'

const UserManagement = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleButtonClick = () => {
    setModalVisible(true)
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
  return (
    <>
      <Header header="USER MANAGEMENT" />
      {/* Stat Cards */}
      <div className="flex justify-between">
        <div className="flex mt-8 ml-4">
          <div className="w-[270px] h-[140px]">
            <StatCard
              percentage="+11.01%"
              percentageColor="text-green-500"
              icon="pi-arrow-up"
              value="$2,554.00"
              label="Total Revenue"
            />
          </div>
          <div className="w-[270px] h-[150px]">
            <StatCard
              percentage="-0.03%"
              percentageColor="text-red-500"
              icon="pi-arrow-down"
              value="3,454"
              label="Active Users"
            />
          </div>
        </div>

        {/* Search Input */}
        <div className="flex mt-20 mr-10">
          <div className="">
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
          <div className="mt-4">
            <CustomModal
              buttonText={'ADD New'}
              buttonStyle={AddNewButtonStyle}
              onHide={() => {
                setModalVisible(false)
              }}
              visible={modalVisible}
              onClick={handleButtonClick}
              icon={<img src="/assets/icons/Plus.png" alt="icon" className="w-3.8 h-3.8 ml-2.5" />}
              children={<AddUser visible={modalVisible} setVisible={setModalVisible} />}
              dialogStyle={{
                height: '580px',
                minHeight: '580px',
                overflowY: 'auto',
                ...DialogStyle,
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex-grow overflow-hidden ml-[3rem] mr-[2.30rem]  border border-solid border-[#D5E1EA] bg-white rounded-lg">
        <div className="flex flex-col h-[570px]">
          <div className="flex-grow overflow-auto">
            <DataTableComponent
              tableStyle={{
                fontSize: '12px',
                color: '#000000',
                fontWeight: 500,
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              data={dummyUserData}
              columns={userColumns}
              actionButtons={ActionButtonColumn}
              style={{ borderBottom: '1px solid #D5E1EA', fontWeight: '400', padding: '10px' }}
              emptyMessage={
                <div className="text-center mt-40">
                  <img
                    src="/assets/images/empty.png"
                    alt="Empty Data"
                    className="w-28 mx-auto mb-4"
                  />
                  {/* <p className="text-gray-500 font-[600] text-lg">{properties.noDataMessage}</p> */}
                  <div data-testid="progress">
                    <ProgressSpinner
                      style={{
                        position: 'absolute',
                        top: '70%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '50px',
                        height: '50px',
                      }}
                      strokeWidth="4"
                    />
                  </div>
                </div>
              }
            />
          </div>

          <div data-testid="PaginatorOne" className="mt-4">
            <Paginator
              // first={pageNumber1}
              // rows={pageSize}
              // totalRecords={totalRecords}
              // rowsPerPageOptions={[5, 10, 20, 30]}
              // onPageChange={onPageChange}
              style={{
                backgroundColor: 'white',
                borderTop: '1px solid #D5E1EA',
                padding: '0.5rem',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserManagement

import StatCard from '../CommonComponent/StatCard/StatCard'
import CustomModal from '../CustomComponent/CustomModal'
import { AddNewButtonStyle, columnStyle, DialogStyle } from '../Utils/Style'
import { useMemo, useState } from 'react'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import Header from '../Sidebar/LayoutComponents/Header'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'
import { dummyAgentData } from '../Utils/DummyData'
import InputTextWithHeader from '../CommonComponent/InputTextWithHeader'

const AgentManagement = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleButtonClick = () => {
    setModalVisible(true)
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
      <Header header="AGENT MANAGEMENT" />
      <div className="flex mt-10 ml-4">
        <div className="flex">
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
        <div className="flex mt-14 ml-4">
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
              // children={<AddUser />}
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
      <div
        className={`bg-#00426F overflow-x-hidden  ml-[48px] mr-[32px] table-container flex flex-col rounded-t-lg`}>
        <div className="flex-grow overflow-auto h-[570px] rounded-b-[10px] border-[1px] border-[#D5E1EA]">
          <DataTableComponent
            tableStyle={{
              fontSize: '12px',
              color: '#000000',
              fontWeight: 500,
              backgroundColor: '#FFFFFF',
              // border:' 1px solid #D5E1EA',
              // borderBottomLeftRadius:'10px'
            }}
            data={dummyAgentData}
            //   selectionMode="single"
            //   onSelectionChange={(e: any) => {
            //     setSelectedMooring(e.value)
            //   }}
            //   selection={selectedMooring}
            rowStyle={(rowData: any) => rowData}
            dataKey="id"
            columns={agentColumns}
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

export default AgentManagement

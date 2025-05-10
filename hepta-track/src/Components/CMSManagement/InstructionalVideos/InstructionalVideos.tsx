import { useMemo, useState } from 'react'
import { AddNewButtonStyle, columnStyle, DialogStyle } from '../../Utils/Style'
import { ActionButtonColumnProps } from '../../../Type/Components/TableTypes'
import Header from '../../Sidebar/LayoutComponents/Header'
import { instructionalData } from '../../Utils/DummyData'
import DataTableComponent from '../../CommonComponent/Table/DataTableComponent'
import InputTextWithHeader from '../../CommonComponent/InputTextWithHeader'
import CustomModal from '../../CustomComponent/CustomModal'

const InstructionalVideos = () => {
   const [modalVisible, setModalVisible] = useState(false)
  
    const handleButtonClick = () => {
      setModalVisible(true)
    }
  const instructionalColumns = useMemo(
    () => [
      {
        id: 's.No',
        label: 'S.No',
        style: columnStyle,
      },
      {
        id: 'image',
        label: 'Image',
        style: columnStyle,
      },
      {
        id: 'name',
        label: 'Name',
        style: columnStyle,
      },
      {
        id: 'detail',
        label: 'Detail',
        style: columnStyle,
      },
      {
        id: 'date',
        label: 'Date',
        style: columnStyle,
      },
      {
        id: 'status',
        label: 'Status',
        style: columnStyle,
      },
    ],
    // [allowExpansion],
    [],
  )

  const ActionButtonColumn: ActionButtonColumnProps = {
    header: '',
    buttons: [
      {
        color: 'green',
        label: 'Edit',
        underline: true,
        // onClick: (rowData) => {
        //   handleMooringTableRowClick(rowData)
        // },
      },
      {
        color: 'red',
        label: 'Delete',
        underline: true,
        // onClick: (rowData) => {
        //   handleMooringTableRowClick(rowData)
        // },
      },
    ],
    headerStyle: { backgroundColor: '#082825', color: 'white' },
    style: {
      borderBottom: '1px solid #D5E1EA ',
      width: '150px',
      fontWeight: 700,
    },
  }
  return (
    <>
      <Header header="INSTRUCTIONAL VIDEOS" />

      <div className="flex justify-end mr-12">
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

      <div
        className={`bg-#00426F overflow-x-hidden mt-[10px]  ml-[48px] mr-[32px] table-container flex flex-col rounded-t-lg`}>
        <div className="flex-grow overflow-auto h-[570px] rounded-b-[10px] border-[1px] border-[#D5E1EA]">
          <DataTableComponent
            tableStyle={{
              fontSize: '12px',
              color: '#000000',
              fontWeight: 500,
              backgroundColor: '#FFFFFF',
              border: ' 1px solid #D5E1EA',
              borderBottomLeftRadius: '10px',
            }}
            data={instructionalData}
            //   selectionMode="single"
            //   onSelectionChange={(e: any) => {
            //     setSelectedMooring(e.value)
            //   }}
            //   selection={selectedMooring}
            rowStyle={(rowData: any) => rowData}
            dataKey="id"
            columns={instructionalColumns}
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

export default InstructionalVideos

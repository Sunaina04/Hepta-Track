import { useMemo } from 'react'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'
import Header from '../Sidebar/LayoutComponents/Header'

const InstructionalVideos = () => {

  const columnStyle = {
    backgroundColor: '#082825',
    fontSize: '12px',
    fontWeight: '700',
    color: '#FFFFFF',
    padding: '15px',
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
        color:'red',
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

  const instructionalData = [
    {
      's.No': 1,
      image: 'https://via.placeholder.com/100',
      name: 'Safety Training',
      detail: 'Comprehensive safety protocols for tractor operation.',
      date: '2024-11-30',
      status: 'Active',
    },
    {
      's.No': 2,
      image: 'https://via.placeholder.com/100',
      name: 'Maintenance Guide',
      detail: 'Step-by-step instructions for daily maintenance.',
      date: '2024-12-01',
      status: 'Active',
    },
    {
      's.No': 3,
      image: 'https://via.placeholder.com/100',
      name: 'Operational Best Practices',
      detail: 'Guidelines to maximize efficiency and minimize wear.',
      date: '2024-12-02',
      status: 'Inactive',
    },
    {
      's.No': 4,
      image: 'https://via.placeholder.com/100',
      name: 'Emergency Procedures',
      detail: 'Quick actions for common emergencies.',
      date: '2024-12-03',
      status: 'Active',
    },
    {
      's.No': 5,
      image: 'https://via.placeholder.com/100',
      name: 'Advanced Features',
      detail: 'Tutorial on utilizing advanced features effectively.',
      date: '2024-12-04',
      status: 'Inactive',
    },
  ];
  

  return (
    <>
      <Header header="INSTRUCTIONAL VIDEOS" />

      <div
        className={`bg-#00426F overflow-x-hidden mt-[10px]  ml-[48px] mr-[32px] table-container flex flex-col rounded-t-lg`}>
        <div className="flex-grow overflow-auto h-[570px] rounded-b-[10px] border-[1px] border-[#D5E1EA]">
          <DataTableComponent
            tableStyle={{
              fontSize: '12px',
              color: '#000000',
              fontWeight: 500,
              backgroundColor: '#FFFFFF',
              border:' 1px solid #D5E1EA',
              borderBottomLeftRadius:'10px'
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

export default InstructionalVideos

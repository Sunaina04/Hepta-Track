import { useMemo } from 'react'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'
import Header from '../Sidebar/LayoutComponents/Header'

const AdsPromotions = () => {

  const columnStyle = {
    backgroundColor: '#082825',
    fontSize: '12px',
    fontWeight: '700',
    color: '#FFFFFF',
    padding: '15px',
  }

  const promotionColumns = useMemo(
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
        id: 'detail',
        label: 'Detail',
        style: columnStyle,
      },
      {
        id: 'createdDate',
        label: 'Created Date',
        style: columnStyle,
      },
      {
        id: 'expDate',
        label: 'Exp.Date',
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

  const promotionData = [
  {
    's.No': 1,
    image: 'https://via.placeholder.com/100',
    detail: '50% off on all items during Black Friday sale.',
    createdDate: '2024-12-01',
    expDate: '2024-12-31',
    status: 'Active',
  },
  {
    's.No': 2,
    image: 'https://via.placeholder.com/100',
    detail: 'Buy one, get one free on selected items.',
    createdDate: '2024-11-20',
    expDate: '2024-12-15',
    status: 'Expired',
  },
  {
    's.No': 3,
    image: 'https://via.placeholder.com/100',
    detail: 'Free shipping on orders above $50.',
    createdDate: '2024-11-10',
    expDate: '2024-12-01',
    status: 'Expired',
  },
  {
    's.No': 4,
    image: 'https://via.placeholder.com/100',
    detail: 'Holiday special discount: 20% off on electronics.',
    createdDate: '2024-12-10',
    expDate: '2025-01-10',
    status: 'Active',
  },
  {
    's.No': 5,
    image: 'https://via.placeholder.com/100',
    detail: 'End of season sale: Flat 30% off.',
    createdDate: '2024-12-05',
    expDate: '2024-12-20',
    status: 'Inactive',
  },
];

  return (
    <>
      <Header header="ADS PROMOTIONS" />

      <div
        className={`bg-#00426F overflow-x-hidden h-[603px] mt-[10px]  ml-[48px] mr-[32px] table-container flex flex-col rounded-t-lg`}>
        <div className="flex-grow overflow-auto h-[570px] rounded-b-[10px] border-[1px] border-[#D5E1EA]">
          <DataTableComponent
            tableStyle={{
              fontSize: '12px',
              color: '#000000',
              fontWeight: 500,
              backgroundColor: '#FFFFFF',
            }}
            data={promotionData}
            //   selectionMode="single"
            //   onSelectionChange={(e: any) => {
            //     setSelectedMooring(e.value)
            //   }}
            //   selection={selectedMooring}
            rowStyle={(rowData: any) => rowData}
            dataKey="id"
            columns={promotionColumns}
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

export default AdsPromotions

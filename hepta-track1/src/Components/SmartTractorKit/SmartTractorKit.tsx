import StatCard from '../CommonComponent/StatCard/StatCard'
import { useMemo } from 'react'
import Header from '../Sidebar/LayoutComponents/Header'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'

const SmartTractorKit = () => {

  
  const columnStyle = {
    backgroundColor: '#082825',
    fontSize: '12px',
    fontWeight: '700',
    color: '#FFFFFF',
    padding: '15px',
  }

  const tractorKitColumns = useMemo(
    () => [
      {
        id: 'deviceId',
        label: ' Device ID',
        style: columnStyle,
      },
      {
        id: 'regNumber',
        label: 'Reg.Number',
        style: columnStyle,
      },
      {
        id: 'date',
        label: 'Date',
        style: columnStyle,
      },
      {
        id: 'activationCode',
        label: 'Activation Code',
        style: columnStyle,
      },
      {
        id: 'subscriptionPlan',
        label: 'Subscription Plan',
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
        label: 'Unlink',
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

  const tractorKitData = [
    {
      deviceId: 'TK001',
      regNumber: 'REG12345',
      date: '2024-12-01',
      activationCode: 'ACT-001',
      subscriptionPlan: 'Basic',
    },
    {
      deviceId: 'TK002',
      regNumber: 'REG12346',
      date: '2024-11-28',
      activationCode: 'ACT-002',
      subscriptionPlan: 'Premium',
    },
    {
      deviceId: 'TK003',
      regNumber: 'REG12347',
      date: '2024-11-25',
      activationCode: 'ACT-003',
      subscriptionPlan: 'Standard',
    },
    {
      deviceId: 'TK004',
      regNumber: 'REG12348',
      date: '2024-11-20',
      activationCode: 'ACT-004',
      subscriptionPlan: 'Basic',
    },
    {
      deviceId: 'TK005',
      regNumber: 'REG12349',
      date: '2024-11-15',
      activationCode: 'ACT-005',
      subscriptionPlan: 'Premium',
    },
  ];

  return (
    <>
      <Header header="SMART TRACTOR KIT" />
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

      <div
        className={`bg-#00426F overflow-x-hidden mt-[10px]  ml-[48px] mr-[32px] table-container flex flex-col rounded-t-lg`}>
        <div className="flex-grow overflow-auto h-[570px] rounded-b-[10px] border-[1px] border-[#D5E1EA]">
          <DataTableComponent
            tableStyle={{
              fontSize: '12px',
              color: '#000000',
              fontWeight: 500,
              backgroundColor: '#FFFFFF',
            }}
            data={tractorKitData}
            //   selectionMode="single"
            //   onSelectionChange={(e: any) => {
            //     setSelectedMooring(e.value)
            //   }}
            //   selection={selectedMooring}
            rowStyle={(rowData: any) => rowData}
            dataKey="id"
            columns={tractorKitColumns}
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
      </div>
    </>
  )
}

export default SmartTractorKit

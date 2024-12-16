import StatCard from '../CommonComponent/StatCard/StatCard'
import { useMemo } from 'react'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import Header from '../Sidebar/LayoutComponents/Header'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'

const VehicleManagement = () => {

  const columnStyle = {
    backgroundColor: '#082825',
    fontSize: '12px',
    fontWeight: '700',
    color: '#FFFFFF',
    padding: '15px',
  }

  const vehicleColumns = useMemo(
    () => [
      {
        id: 'userId',
        label: 'ID',
        style: columnStyle,
      },
      {
        id: 'regDate',
        label: 'Reg.date',
        style: columnStyle,
      },
      {
        id: 'regNumber',
        label: 'Reg Number',
        style: columnStyle,
      },
      {
        id: 'distance',
        label: 'Distance(km)',
        style: columnStyle,
      },
      {
        id: 'travelTime',
        label: 'Travel Time',
        style: columnStyle,
      },
      {
        id: 'totalArea',
        label: 'Total Area(acres)',
        style: columnStyle,
      },
      {
        id: 'stoppedTime',
        label: 'Stopped Time',
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
        color: 'green',
        label: 'View/edit',
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

  const vehicleData = [
    {
      userId: '1',
      regDate: '2024-12-01',
      regNumber: 'ABC123',
      distance: 120.5,
      travelTime: '2h 45m',
      totalArea: 15.2,
      stoppedTime: '1h 30m',
    },
    {
      userId: '2',
      regDate: '2024-11-25',
      regNumber: 'XYZ789',
      distance: 200.0,
      travelTime: '4h 15m',
      totalArea: 30.5,
      stoppedTime: '45m',
    },
    {
      userId: '3',
      regDate: '2024-10-15',
      regNumber: 'LMN456',
      distance: 75.8,
      travelTime: '1h 20m',
      totalArea: 10.0,
      stoppedTime: '2h',
    },
    {
      userId: '4',
      regDate: '2024-09-10',
      regNumber: 'QRS654',
      distance: 180.3,
      travelTime: '3h 50m',
      totalArea: 25.0,
      stoppedTime: '1h',
    },
    {
      userId: '5',
      regDate: '2024-08-22',
      regNumber: 'DEF321',
      distance: 50.0,
      travelTime: '1h',
      totalArea: 5.0,
      stoppedTime: '30m',
    },
  ];

  return (
    <>
      <Header header="VEHICLE MANAGEMENT" />
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
            data={vehicleData}
            //   selectionMode="single"
            //   onSelectionChange={(e: any) => {
            //     setSelectedMooring(e.value)
            //   }}
            //   selection={selectedMooring}
            rowStyle={(rowData: any) => rowData}
            dataKey="id"
            columns={vehicleColumns}
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

export default VehicleManagement

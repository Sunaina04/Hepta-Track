import StatCard from '../CommonComponent/StatCard/StatCard'
import { useMemo } from 'react'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import Header from '../Sidebar/LayoutComponents/Header'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'
import { columnStyle } from '../Utils/Style'
import InputTextWithHeader from '../CommonComponent/InputTextWithHeader'

const VehicleManagement = () => {
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
  ]

  return (
    <>
      <Header header="VEHICLE MANAGEMENT" />
      <div className="flex justify-between">
        <div className="flex mt-8 ml-4">
          <div>
            <StatCard
              percentage="+11.01%"
              percentageColor="text-green-500"
              icon="/assets/icons/arrowUp.png"
              value="$2,554.00"
              label="Total Revenue"
            />
          </div>
          <div>
            <StatCard
              percentage="-0.03%"
              percentageColor="text-red-500"
              icon="/assets/icons/arrowDown.png"
              value="3,454"
              label="Active Users"
            />
          </div>
        </div>

        <div className="mt-32 mr-4">
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
      </div>

      <div
        className={`bg-#00426F overflow-x-hidden ml-[48px] mr-[32px] table-container flex flex-col rounded-t-lg`}>
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

export default VehicleManagement

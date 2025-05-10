import StatCard from '../CommonComponent/StatCard/StatCard'
import { useMemo, useState, useEffect } from 'react'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import Header from '../Sidebar/LayoutComponents/Header'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'
import { columnStyle } from '../Utils/Style'
import InputTextWithHeader from '../CommonComponent/InputTextWithHeader'
import { Paginator } from 'primereact/paginator'
import { ProgressSpinner } from 'primereact/progressspinner'
import { loadingBlur } from '../Utils/Style'


const VehicleManagement = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

    
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  


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
          <div className='-ml-2'>
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
              width: '250px',
              height: '44px',
              padding: '0 4rem 0 3rem',
              border: '1px solid #C5D9E0',
              fontSize: '16px',
              color: '#000000',
              borderRadius: '12px',
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

  
<div className="flex-grow ml-[3rem] mr-[2.30rem] border border-solid border-[#D5E1EA] bg-white rounded-lg h-[95vh] mb-3 relative">
  <div className="flex flex-col h-full">
    <div className="flex-grow overflow-y-auto rounded-lg">
      <DataTableComponent
        tableStyle={{
          fontSize: '12px',
          color: '#000000',
          fontWeight: 500,
          backgroundColor: '#FFFFFF',
          cursor: 'pointer',
        }}
        data={vehicleData}
        columns={vehicleColumns}
        actionButtons={ActionButtonColumn}
        style={{
          borderBottom: '1px solid #D5E1EA',
          fontWeight: '400',
          padding: '10px',
        }}
        emptyMessage={
          <div className="text-center mt-40">
            <img
              src="/assets/images/empty.png"
              alt="Empty Data"
              className="w-28 mx-auto mb-4"
            />
          </div>
        }
      />
    </div>

    {isLoading && (
           <ProgressSpinner
           style={{
             position: 'absolute',
             top: '40%',
             left: '50%',
             transform: 'translate(-50%, -50%)',
             width: '50px',
             height: '50px',
           }}
           strokeWidth="4"
         />
          )}

    <div
      data-testid="PaginatorOne"
      className="absolute bottom-0 left-0 w-full bg-white border-t border-[#D5E1EA] p-2"
    >
      <Paginator
        // first={pageNumber1}
        // rows={pageSize}
        // totalRecords={totalRecords}
        // rowsPerPageOptions={[5, 10, 20, 30]}
        // onPageChange={onPageChange}
        style={{
          padding: '0rem',
        }}
      />
    </div>
  </div>
</div>


    </>
  )
}

export default VehicleManagement

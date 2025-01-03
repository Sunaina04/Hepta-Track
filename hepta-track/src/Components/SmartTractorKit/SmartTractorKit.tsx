import StatCard from '../CommonComponent/StatCard/StatCard'
import { useMemo, useState, useEffect } from 'react'
import Header from '../Sidebar/LayoutComponents/Header'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'
import { columnStyle } from '../Utils/Style'
import { tractorKitData } from '../Utils/DummyData'
import { Paginator } from 'primereact/paginator'
import { ProgressSpinner } from 'primereact/progressspinner'
import { loadingBlur } from '../Utils/Style'



const SmartTractorKit = () => {
 const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


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
        color: 'darkGreen',
        label: 'Unlink',
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
  
      <Header header="SMART TRACTOR KIT" />
      <div className="flex mt-8 ml-4">
        <StatCard
          percentage="+11.01%"
          percentageColor="text-green-500"
          icon="/assets/icons/arrowUp.png"
          value="$2,554.00"
          label="Total Revenue"
        />
        <StatCard
          percentage="-0.03%"
          percentageColor="text-red-500"
          icon="/assets/icons/arrowDown.png"
          value="3,454"
          label="Active Users"
        />
      </div>
    
<div className="flex-grow ml-[3rem] mr-[2.30rem] border border-solid border-[#D5E1EA] bg-white rounded-lg h-[95vh] mb-3 relative">
  <div className="flex flex-col h-full">
    <div className="flex-grow overflow-y-auto">
      <DataTableComponent
        tableStyle={{
          fontSize: '12px',
          color: '#000000',
          fontWeight: 500,
          backgroundColor: '#FFFFFF',
          cursor: 'pointer',
        }}
        data={tractorKitData}
        columns={tractorKitColumns}
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

export default SmartTractorKit

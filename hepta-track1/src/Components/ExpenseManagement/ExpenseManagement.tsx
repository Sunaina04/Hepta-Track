import { useMemo } from 'react'
import Header from '../Sidebar/LayoutComponents/Header'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'
import StatCard from '../CommonComponent/StatCard/StatCard'

const ExpenseManagement = () => {

  const columnStyle = {
    backgroundColor: '#082825',
    fontSize: '12px',
    fontWeight: '700',
    color: '#FFFFFF',
    padding: '15px',
  }

  const expenseColumns = useMemo(
    () => [
      {
        id: 'userId',
        label: 'ID',
        style: columnStyle,
      },
      {
        id: 'regNumber',
        label: 'Reg Number',
        style: columnStyle,
      },
      {
        id: 'date',
        label: 'Date',
        style: columnStyle,
      },
      {
        id: 'detail',
        label: 'Detail',
        style: columnStyle,
      },
      {
        id: 'spend',
        label: 'Spend',
        style: columnStyle,
      },
      {
        id: 'profit',
        label: 'Profit',
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

  const expenseData = [
    {
      userId: '1',
      regNumber: 'EXP123',
      date: '2024-12-01',
      detail: 'Purchase of raw materials',
      spend: 5000,
      profit: 1500,
    },
    {
      userId: '2',
      regNumber: 'EXP124',
      date: '2024-11-28',
      detail: 'Office supplies',
      spend: 300,
      profit: 100,
    },
    {
      userId: '3',
      regNumber: 'EXP125',
      date: '2024-11-25',
      detail: 'Employee salaries',
      spend: 20000,
      profit: -5000,
    },
    {
      userId: '4',
      regNumber: 'EXP126',
      date: '2024-11-20',
      detail: 'Utility bills',
      spend: 800,
      profit: 200,
    },
    {
      userId: '5',
      regNumber: 'EXP127',
      date: '2024-11-15',
      detail: 'Marketing campaigns',
      spend: 1200,
      profit: 400,
    },
  ];

  return (
    <>
      <Header header="EXPENSE MANAGEMENT" />
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
            }}
            data={expenseData}
            //   selectionMode="single"
            //   onSelectionChange={(e: any) => {
            //     setSelectedMooring(e.value)
            //   }}
            //   selection={selectedMooring}
            rowStyle={(rowData: any) => rowData}
            dataKey="id"
            columns={expenseColumns}
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

export default ExpenseManagement

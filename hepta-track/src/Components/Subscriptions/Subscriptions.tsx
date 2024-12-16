import { useMemo } from 'react'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import Header from '../Sidebar/LayoutComponents/Header'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'

const Subscriptions = () => {

  const columnStyle = {
    backgroundColor: '#082825',
    fontSize: '12px',
    fontWeight: '700',
    color: '#FFFFFF',
    padding: '15px',
  }

  const subscriptionColumns = useMemo(
    () => [
      {
        id: 's.No',
        label: 'S.No',
        style: columnStyle,
      },
      {
        id: 'subscriptionName',
        label: 'Subscription Name',
        style: columnStyle,
      },
      {
        id: 'createdDate',
        label: 'Created Date',
        style: columnStyle,
      },
      {
        id: 'detail',
        label: 'Detail',
        style: columnStyle,
      },
      {
        id: 'amount',
        label: 'Amount',
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

  const subscriptionData = [
    {
      's.No': 1,
      subscriptionName: 'Premium Plan',
      createdDate: '2024-12-01',
      detail: 'Access to all features and priority support',
      amount: '$99.99',
      status: 'Active',
    },
    {
      's.No': 2,
      subscriptionName: 'Standard Plan',
      createdDate: '2024-11-25',
      detail: 'Access to most features with limited support',
      amount: '$49.99',
      status: 'Inactive',
    },
    {
      's.No': 3,
      subscriptionName: 'Basic Plan',
      createdDate: '2024-11-20',
      detail: 'Access to basic features only',
      amount: '$19.99',
      status: 'Active',
    },
    {
      's.No': 4,
      subscriptionName: 'Enterprise Plan',
      createdDate: '2024-11-15',
      detail: 'Custom plan tailored for businesses',
      amount: '$499.99',
      status: 'Pending',
    },
    {
      's.No': 5,
      subscriptionName: 'Trial Plan',
      createdDate: '2024-12-10',
      detail: 'Free trial for 14 days',
      amount: '$0.00',
      status: 'Active',
    },
  ];
  
  
  
  return (
    <>
      <Header header="SUBSCRIPTIONS" />

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
            data={subscriptionData}
            //   selectionMode="single"
            //   onSelectionChange={(e: any) => {
            //     setSelectedMooring(e.value)
            //   }}
            //   selection={selectedMooring}
            rowStyle={(rowData: any) => rowData}
            dataKey="id"
            columns={subscriptionColumns}
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

export default Subscriptions

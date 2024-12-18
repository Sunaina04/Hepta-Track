import { useMemo, useState } from 'react'
import Header from '../Sidebar/LayoutComponents/Header'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'
import StatCard from '../CommonComponent/StatCard/StatCard'
import { AddNewButtonStyle, columnStyle, DialogStyle } from '../Utils/Style'
import { expenseData } from '../Utils/DummyData'
import CustomModal from '../CustomComponent/CustomModal'
import ButtonComponent from '../CommonComponent/Button/ButtonComponent'
import { AddExpenseProps } from '../../Type/ComponentBasedTypes'
import AddExpense from '../Add Expense/AddExpense'

const ExpenseManagement = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleButtonClick = () => {
    setModalVisible(true)
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
      <Header header="EXPENSE MANAGEMENT" />
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

        <div className="flex mt-36 mr-8">
          <div>
            <ButtonComponent
              label={'Download Statement'}
              onClick={() => {}}
              style={{
                width: '200px',
                height: '44px',
                backgroundColor: '#00B300',
                cursor: 'pointer',
                fontWeight: 'bolder',
                fontSize: '1rem',
                boxShadow: 'none',
                color: 'white',
                borderRadius: '0.50rem',
              }}
            />
          </div>
          <div className="">
            <CustomModal
              buttonText={'ADD New'}
              buttonStyle={AddNewButtonStyle}
              onHide={() => {
                setModalVisible(false)
              }}
              visible={modalVisible}
              onClick={handleButtonClick}
              icon={<img src="/assets/icons/Plus.png" alt="icon" className="w-3.8 h-3.8 ml-2.5" />}
               children={<AddExpense visible={modalVisible} setVisible={setModalVisible} />}
              dialogStyle={{
                height: '580px',
                minHeight: '580px',
                overflowY: 'auto',
                ...DialogStyle,
              }}
            />
          </div>
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

export default ExpenseManagement

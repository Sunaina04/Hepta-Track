import { useMemo, useState, useEffect } from 'react'
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
import { Paginator } from 'primereact/paginator'
import { ProgressSpinner } from 'primereact/progressspinner'
import { loadingBlur } from '../Styles/styles'


const ExpenseManagement = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);




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
              onClick={() => { }}
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
              data={expenseData}
              columns={expenseColumns}
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

export default ExpenseManagement

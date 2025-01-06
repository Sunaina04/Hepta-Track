import StatCard from '../CommonComponent/StatCard/StatCard'
import CustomModal from '../CustomComponent/CustomModal'
import { AddNewButtonStyle, DialogStyle } from '../Utils/Style'
import { useMemo, useState , useEffect } from 'react'
import InputTextWithHeader from '../CommonComponent/InputTextWithHeader'
import { ActionButtonColumnProps } from '../../Type/Components/TableTypes'
import Header from '../Sidebar/LayoutComponents/Header'
import DataTableComponent from '../CommonComponent/Table/DataTableComponent'
import AddAgent from '../Add Agent /AddAgent'
import AddUser from '../Add User/AddUser'
import { dummyAgentData } from '../Utils/DummyData'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Paginator } from 'primereact/paginator'
import { loadingBlur } from '../Utils/Style'
import { dialogStyle , dialogblur} from '../Utils/Style'
import { useDispatch , useSelector } from 'react-redux'
import { RootState } from '../../Store/Store'

const AgentManagement = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch()
    const open = useSelector((state: RootState) => state.user.isOpen)
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
  


  const columnStyle = {
    backgroundColor: '#082825',
    fontSize: '12px',
    fontWeight: '700',
    color: '#FFFFFF',
    padding: '15px',
  }

  const handleButtonClick = () => {
    setModalVisible(true)
  }
  
  const agentColumns = useMemo(
    () => [
      {
        id: 'userId',
        label: 'ID',
        style: columnStyle,
      },
      {
        id: 'userName',
        label: 'Agent Name',
        style: columnStyle,
      },
      {
        id: 'phoneNumber',
        label: 'Phone Number',
        style: columnStyle,
      },
      {
        id: 'email',
        label: 'Email Address',
        style: columnStyle,
      },
      {
        id: 'address',
        label: 'Address',
        style: columnStyle,
      },
    ],
    [],
  )

  const ActionButtonColumn: ActionButtonColumnProps = {
    header: 'Status',
    buttons: [
      {
        color: 'black',
        label: 'Active',
        underline: true,
        // onClick: (rowData) => {
        //   handleMooringTableRowClick(rowData)
        // },
      },
      {
        color: 'green',
        label: 'View/edit',
        underline: true,
        // onClick: (rowData) => {
        //   handleMooringTableRowClick(rowData)
        // },
      },
    ],
    headerStyle: { backgroundColor: '#082825', color: 'white', fontSize: '12px' },
    style: {
      borderBottom: '1px solid #D5E1EA ',
      width: '150px',
      fontWeight: 700,
    },
  }
  return (
    <>

      <Header header="AGENT MANAGEMENT" />
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
          <div className='ml-4'>
            <StatCard
              percentage="-0.03%"
              percentageColor="text-red-500"
              icon="/assets/icons/arrowDown.png"
              value="3,454"
              label="Active Users"
            />
          </div>
        </div>

        {/* Search Input */}
        <div className="flex mt-32 mr-10">
          <div className="">
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

          {/* Add New Button */}
          <div className="mt-4">
            <CustomModal
              buttonText={'ADD New'}
              buttonStyle={AddNewButtonStyle}
              onHide={() => {
                setModalVisible(false)
              }}
              visible={modalVisible}
              onClick={handleButtonClick}
              icon={<img src="/assets/icons/Plus.png" alt="icon" className="w-3.8 h-3.8 ml-2.5" />}
              children={<AddAgent visible={modalVisible} setVisible={setModalVisible} />}
              dialogStyle={{
                ...dialogStyle , height:"650px"
              }}
            />
             {modalVisible && (
                                <div
                                   style={{...dialogblur , marginLeft: open ? "280px" : "110px",}}
                                ></div>
                              )}
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
        data={dummyAgentData}
        columns={agentColumns}
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

export default AgentManagement

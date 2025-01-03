import { useMemo, useState , useEffect } from 'react'
import { AddNewButtonStyle, columnStyle, DialogStyle } from '../../Utils/Style'
import { ActionButtonColumnProps } from '../../../Type/Components/TableTypes'
import Header from '../../Sidebar/LayoutComponents/Header'
import { instructionalData } from '../../Utils/DummyData'
import DataTableComponent from '../../CommonComponent/Table/DataTableComponent'
import InputTextWithHeader from '../../CommonComponent/InputTextWithHeader'
import CustomModal from '../../CustomComponent/CustomModal'
import AddVideo from '../../Add Video/AddVideo'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Paginator } from 'primereact/paginator'
import { loadingBlur } from '../../Utils/Style'
import { dialogStyle , dialogblur } from '../../Utils/Style'
import { useDispatch , useSelector} from 'react-redux'
import { RootState } from '../../../Store/Store'

const InstructionalVideos = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
         const dispatch = useDispatch()
  const open = useSelector((state: RootState) => state.user.isOpen)
  
       
         useEffect(() => {
           const timer = setTimeout(() => {
             setIsLoading(false);
           }, 1000);
       
           return () => clearTimeout(timer);
         }, []);
       
   const [modalVisible, setModalVisible] = useState(false)
  
    const handleButtonClick = () => {
      setModalVisible(true)
    }
  const instructionalColumns = useMemo(
    () => [
      {
        id: 's.No',
        label: 'S.No',
        style: columnStyle,
      },
      {
        id: 'image',
        label: 'Image',
        style: columnStyle,
      },
      {
        id: 'name',
        label: 'Name',
        style: columnStyle,
      },
      {
        id: 'detail',
        label: 'Detail',
        style: columnStyle,
      },
      {
        id: 'date',
        label: 'Date',
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

      <Header header="INSTRUCTIONAL VIDEOS" />

      <div className="flex justify-end mr-12">
        <div className="mb-3">
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
             children={<AddVideo
              visible={modalVisible} setVisible={setModalVisible} />}
            dialogStyle={{
                        ...dialogStyle, height: "700px"
                      }}
                    />
                    {modalVisible && (
                      <div
                        style={{ ...dialogblur, marginLeft: open ? "280px" : "110px", }}
                      ></div>
                  )}
          
        </div>
      </div>

      <div className="flex-grow ml-[3rem] mr-[2.30rem] border border-solid border-[#D5E1EA] bg-white rounded-lg h-[calc(100vh-165px)] relative">
  <div className="flex flex-col">
    <div className="flex-grow overflow-y-auto">
      <DataTableComponent
        tableStyle={{
          fontSize: '12px',
          color: '#000000',
          fontWeight: 500,
          backgroundColor: '#FFFFFF',
          cursor: 'pointer',
        }}
        data={instructionalData}
        columns={instructionalColumns}
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
               top: '45%',
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

export default InstructionalVideos

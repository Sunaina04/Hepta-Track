import Header from '../../Sidebar/LayoutComponents/Header'
import { Panel } from 'primereact/panel'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { FileUpload } from 'primereact/fileupload'
import ButtonComponent from '../../CommonComponent/Button/ButtonComponent'
const General = () => {
  return (
    <>
      <Header header="GENERAL" />

      <div className=" overflow-x-hidden h-[500px] mt-8 border-[1px] border-[#D5E1EA] ml-12 mr-8 rounded-lg">
        <Panel
          header="General"
          className="bg-[#082825] text-white text-[12px] font-bold p-[14px] rounded-t-lg"
        />
        <div className="flex justify-between ">
          <div>
            <div className="flex ml-4 gap-6 mt-6">
              <div>
                <div className="font-medium text-sm text-[#000000]">
                  <div>Name</div>
                </div>
                <div className="mt-2">
                  <InputText
                    style={{
                      width: '350px',
                      height: '32px',
                      border: '1px solid #D5E1EA',
                      borderRadius: '0.50rem',
                      fontSize: '0.8rem',
                      boxShadow: 'none',
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="font-medium text-sm text-[#000000]">
                  <div className="flex gap-1">Phone no</div>
                </div>
                <div className="mt-2">
                  <InputText
                    style={{
                      width: '350px',
                      height: '32px',
                      border: '1px solid #D5E1EA',
                      borderRadius: '0.50rem',
                      fontSize: '0.8rem',
                      boxShadow: 'none',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="ml-4 mt-6">
              <div className="font-medium text-sm text-[#000000]">
                <div className="flex gap-1">Detail</div>
              </div>
              <div className="mt-2">
                <InputTextarea
                  style={{
                    width: '730px',
                    height: '92px',
                    border: '1px solid #D5E1EA',
                    borderRadius: '0.50rem',
                    fontSize: '0.8rem',
                    resize: 'none',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 mr-4">
            <span className="font-medium text-sm text-[#000000]">
              <div className="">Logo</div>
            </span>
            <div className="mt-2">
              <FileUpload
                mode="basic"
                style={{
                  width: '333px',
                  height: '176px',
                  border: '1px solid #D5E1EA',
                  borderRadius: '0.50rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-40 ml-4">
          <ButtonComponent
            label={'Save'}
            onClick={() => {}}
            style={{
              width: '80px',
              height: '44px',
              backgroundColor: '#00B300',
              cursor: 'pointer',
              fontWeight: 'bolder',
              fontSize: '1rem',
              boxShadow: 'none',
              color: 'white',
              borderRadius: '0.50rem',
              overflowX: 'hidden',
            }}
          />
        </div>
      </div>
    </>
  )
}

export default General

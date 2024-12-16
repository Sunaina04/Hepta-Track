import StatCard from '../CommonComponent/StatCard/StatCard'
import CustomModal from '../CustomComponent/CustomModal'
import Header from '../Sidebar/LayoutComponents/Header'
import { AddNewButtonStyle, DialogStyle } from '../Utils/Style'

const AgentManagement = () => {
  return (
    <>
      <Header header="AGENT MANAGEMENT" />
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
      <div className="flex justify-end mr-12 ">
        <div className="flex mt-6 ">
          <CustomModal
            buttonText={'ADD NEW'}
            buttonStyle={AddNewButtonStyle}
            onHide={() => {}}
            icon={<img src="/assets/icons/Plus.png" alt="icon" className="w-3.8 h-3.8 ml-4" />}
            dialogStyle={{
              height: '580px',
              minHeight: '580px',
            }}
          />
        </div>
      </div>
    </>
  )
}

export default AgentManagement

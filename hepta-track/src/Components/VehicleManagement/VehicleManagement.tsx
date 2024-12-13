import StatCard from '../CommonComponent/StatCard/StatCard'
import Header from '../Sidebar/LayoutComponents/Header'

const VehicleManagement = () => {
  return (
    <>
      <Header header="VEHICLE MANAGEMENT" />
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
    </>
  )
}

export default VehicleManagement

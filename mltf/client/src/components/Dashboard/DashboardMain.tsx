import AddRisk from '../MLTF/AddRisk'
import DashboardContent from './DashboardContent'
import DashboardSidebar from './DashboardSidebar'

const DashboardMain = () => {
	return (
		<div className='flex gap-8 h-full bg-[#f0f0f0] overflow-hidden'>
			<DashboardSidebar />
			<DashboardContent>
				<AddRisk />
			</DashboardContent>
		</div>
	)
}

export default DashboardMain

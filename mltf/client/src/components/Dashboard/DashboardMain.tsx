import { useState } from 'react'
import DashboardContent from './DashboardContent'
import DashboardSidebar from './DashboardSidebar'
import AddRisk from '../MLTF/AddRisk'
import SelectedRisks from '../MLTF/SelectedRisks'

const DashboardMain = () => {
	const [tab, setTab] = useState('addRisk')

	return (
		<div className='flex gap-8 h-full bg-[#f0f0f0] overflow-hidden rounded-b-lg'>
			<DashboardSidebar setTab={setTab} />
			<DashboardContent>
				{tab === 'addRisk' && <AddRisk />}
				{tab === 'selectedRisks' && <SelectedRisks />}
				{tab === 'results' && <div>Results</div>}
			</DashboardContent>
		</div>
	)
}

export default DashboardMain

import DashboardHeader from './DashboardHeader'
import DashboardMain from './DashboardMain'

const Dashboard = () => {
	return (
		<div className='h-full flex flex-col rounded-xl bg-white'>
			<DashboardHeader />
			<DashboardMain />
		</div>
	)
}

export default Dashboard

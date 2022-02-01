import AddRisk from '../MLTF/AddRisk'

const DashboardContent = ({ children }: any) => {
	return (
		<div className='w-full overflow-scroll rounded-br-lg px-8 py-4 shadow-sm border-l-[1px] bg-white'>
			{children}
		</div>
	)
}

export default DashboardContent

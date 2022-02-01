import {
	MdOutlineAddBox,
	MdOutlineAnalytics,
	MdOutlineListAlt,
} from 'react-icons/md'
const DashboardSidebar = ({ setTab }: any) => {
	return (
		<div className='bg-white w-[25%] h-full sticky top-0 rounded-bl-xl p-4 border-r-[1px] flex flex-col gap-2'>
			<button
				onClick={() => setTab('addRisk')}
				className='flex items-center gap-2 py-2 px-4 rounded-lg mx-auto lg:mx-0 hover:bg-[#f3f3f3]'
			>
				<MdOutlineAddBox size={24} />
				<p className='hidden lg:block grow text-left text-sm'>Add risk</p>
			</button>

			<button
				onClick={() => setTab('selectedRisks')}
				className='flex items-center gap-2 py-2 px-4 rounded-lg mx-auto lg:mx-0 hover:bg-[#f3f3f3]'
			>
				<MdOutlineListAlt size={24} />
				<p className='hidden lg:block grow text-left text-sm'>Selected risks</p>
			</button>

			<button
				onClick={() => setTab('results')}
				className='flex items-center gap-2 py-2 px-4 rounded-lg mx-auto lg:mx-0 hover:bg-[#f3f3f3]'
			>
				<MdOutlineAnalytics size={24} />
				<p className='hidden lg:block grow text-left text-sm'>Results</p>
			</button>
		</div>
	)
}

export default DashboardSidebar

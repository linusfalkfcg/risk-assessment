import { MdOutlineNavigateBefore } from 'react-icons/md'
import { Link } from 'react-router-dom'

const DashboardHeader = () => {
	return (
		<div className='h-20 w-full rounded-t-xl flex items-center px-4 shadow-sm border-b-[1px] z-50 bg-white'>
			<Link to='/'>
				<button className='p-2 rounded-xl hover:bg-[#f3f3f3]'>
					<MdOutlineNavigateBefore size={32} />
				</button>
			</Link>
			<div className='flex flex-col justify-center gap-1 ml-6'>
				<h1 className='font-semibold'>MLTF</h1>
				<p className='text-sm text-gray-500'>Calculate the risk blabla</p>
			</div>
		</div>
	)
}

export default DashboardHeader

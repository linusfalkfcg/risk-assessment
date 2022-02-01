import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Home = () => {
	return (
		<div className='h-full grid grid-cols-2 grid-rows-4 gap-8'>
			<Link to='/mltf'>
				<Card>
					<p className='text-3xl'>MLTF</p>
				</Card>
			</Link>
		</div>
	)
}

export default Home

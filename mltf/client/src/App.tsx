import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import MLTF from './pages/MLTF'

// Components
import Navbar from './components/Navbar'

function App() {
	return (
		<div className='App'>
			<div className='flex flex-col items-center h-screen overflow-hidden bg-[#f0f0f0]'>
				<header className='w-full flex justify-center items-center sticky top-0 z-[100] border-b-[1px] bg-[#004c42] text-gray-50'>
					<Navbar />
				</header>
				<main className='w-full h-full p-8 overflow-hidden'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/mltf' element={<MLTF />} />
					</Routes>
				</main>
			</div>
		</div>
	)
}

export default App

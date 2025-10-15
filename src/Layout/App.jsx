import Header from '@/components/Header/Header'
import { Outlet } from 'react-router'

function App() {
	return (
		<>
			<Header />
			<main className="page">
				<Outlet />
			</main>
			<div id="modal-root"></div>
		</>
	)
}

export default App

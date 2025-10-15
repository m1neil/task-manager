import useUser from '@/hooks/useUser'
import ProjectsList from './components/ProjectsList/ProjectsList'
import './home.scss'

function Home() {
	const { user } = useUser()
	return (
		<section className="home">
			<div className="home-container">
				<h1 className="home-title title title-purple title-big">Проекти</h1>
				{user.UserId && (
					<button type="button" className="home-add button">
						Додати проект
					</button>
				)}
				{!user.UserId ? 'Зареєструйтесь в додатку' : <ProjectsList />}
			</div>
		</section>
	)
}

export default Home

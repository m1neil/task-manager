import { useParams } from 'react-router'
import './Project.scss'
import Members from './components/Members/Members'
import Progress from './components/Progress/Progress'
import Statistics from './components/Statistics/Statistics'
import Files from './components/Files/Files'
import Notes from './components/Notes/Notes'

function Project() {
	const { id } = useParams()

	return (
		<section className="project">
			<div className="project-container">
				<div className="project-content">
					<div className="project-top">
						<h1 className="project-name title title-middle">NeuroFlow</h1>
						<div className="project-date">6 Вересня, 2025</div>
						<div className="project-text text">
							<p>
								Функціонал: AI-асистент для менеджерів — прогнозує завантаження
								співробітників, виявляє “вузькі місця” у проєктах. Аналітика
								настрою команди — алгоритми обробки природної мови визначають
								рівень стресу/задоволення співробітників на основі повідомлень у
								корпоративних чатах (Slack, Teams). Автоматизація задач —
								інтеграція з Jira, Trello, Asana для створення/розподілу завдань
								на основі історії роботи.
							</p>
						</div>
						<Members />
					</div>
					<div className="project-info">
						<Progress />
						<Statistics />
						<Files />
					</div>
				</div>
				<div className="project-content">
					<div className="project-lists">
						<div className="project-list">
							<h2 className="project-label title title-decor">Нотатки</h2>
							<Notes />
						</div>
						<div className="project-list">
							<h2 className="project-label title title-decor">Завдання</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Project

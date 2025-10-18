import { useParams } from 'react-router'
import './Project.scss'
import Members from './components/Members/Members'
import Progress from './components/Progress/Progress'

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
						<div className="project-statistics statistics">
							<h2 className="statistics-title title title-middle title-decor">
								Прогрес по завданням
							</h2>
							<div className="statistics-list">
								<div className="statistics-item">
									<div className="statistics-top">
										<div className="statistics-label">Текстова частина</div>
										<div className="statistics-progress">3/8</div>
									</div>
									<div className="statistics-line">
										<span></span>
									</div>
								</div>
								<div className="statistics-item --green">
									<div className="statistics-top">
										<div className="statistics-label">Ілюстрації</div>
										<div className="statistics-progress">6/10</div>
									</div>
									<div className="statistics-line">
										<span></span>
									</div>
								</div>
								<div className="statistics-item --orange">
									<div className="statistics-top">
										<div className="statistics-label">Інтерфейс</div>
										<div className="statistics-progress">10/10</div>
									</div>
									<div className="statistics-line">
										<span></span>
									</div>
								</div>
								<div className="statistics-item --red">
									<div className="statistics-top">
										<div className="statistics-label">Розробка</div>
										<div className="statistics-progress">2/7</div>
									</div>
									<div className="statistics-line">
										<span></span>
									</div>
								</div>
							</div>
						</div>
						<div className="statistics-files files">
							<h2 className="files-title title title-middle title-decor">
								Вкладені файли
							</h2>
							<div className="files-items">
								<div className="file">
									<img src="#" alt="file icon" className="file-icon" />
									<div className="file-content">
										<div className="file-name">User-Journey.pdf</div>
										<div className="file-size">1.4 MB</div>
									</div>
									<div className="file-actions">
										<button type="button" className="file-download">
											<img src="@img" alt="Image" />
										</button>
										<button type="button" className="file-code">
											<img src="@img" alt="Image" />
										</button>
									</div>
									<div className="file-status">Завантажено</div>
								</div>
							</div>
							<div className="files-actions">
								<button className="files-remove button">Видалити</button>
								<div className="files-add button">Додати файл</div>
							</div>
						</div>
					</div>
				</div>
				<div className="project-content">
					<div className="project-lists">
						<div className="project-notes notes"></div>
						<div className="project-tasks tasks"></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Project

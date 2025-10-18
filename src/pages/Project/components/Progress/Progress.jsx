import './Progress.scss'

function Progress() {
	return (
		<div className="project-progress progress">
			<h2 className="progress-title title title-decor">Тижневий прогрес</h2>
			<div className="progress-circle">
				<div className="progress-value">75%</div>
				<div className="progress-label">для завершення завдання</div>
				<div className="circle-bar"></div>
			</div>
		</div>
	)
}

export default Progress

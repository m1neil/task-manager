import Task from '../Task/Task'
import './Tasks.scss'

function Tasks({ title }) {
	return (
		<div className="tasks">
			<h3 className="tasks-title">{title}</h3>
			<div className="tasks-items">
				<Task priority="high" />
				<Task priority="middle" />
				<Task priority="low" />
			</div>
		</div>
	)
}

export default Tasks

import './Task.scss'

function Task({ priority }) {
	const priorities = {
		high: 'високий',
		middle: 'середній',
		low: 'низький',
	}

	const currentPriority = priorities[priority]

	return (
		<article className="task">
			<label className="task-checkbox checkbox">
				<span className="checkbox-block"></span>
				Написати документацію для API
				<input className="checkbox-input" type="checkbox" />
			</label>
			{currentPriority && (
				<div data-priority={priority} className="task-priority">
					{currentPriority}
				</div>
			)}
		</article>
	)
}

export default Task

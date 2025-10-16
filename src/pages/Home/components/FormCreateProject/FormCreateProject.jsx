import { useState } from 'react'
import './FormCreateProject.scss'

function FormCreateProject() {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')

	return (
		<div className="new-project">
			<div className="new-project-top">
				<div className="new-project-content">
					<h4 className="new-project-title">Новий проект</h4>
					<div className="new-project-subtitle">
						Створіть проект для вашої команди
					</div>
				</div>
				<button
					data-close-modal
					type="button"
					aria-label="close modal window"
					className="new-project-close"
				></button>
			</div>
			<div className="new-project-body">
				<form className="new-project-form form" action="#">
					<div className="form-line">
						<label htmlFor="name-project" className="form-label --small">
							Назва проекту
						</label>
						<input
							data-required=""
							type="text"
							id="name-project"
							name="name-project"
							className="form-input input"
							placeholder="Введіть назву проекту"
							maxLength="50"
							onChange={e => setName(e.target.value)}
						/>
						<div className="form-symbols">{name.length}/50</div>
					</div>
					<div className="form-line">
						<label htmlFor="description-project" className="form-label --small">
							Опис проекту
						</label>
						<textarea
							className="form-input input"
							placeholder="Опишіть цілі та завдання проекту..."
							name="description-project"
							id="description-project"
							maxLength="300"
							onChange={e => setDescription(e.target.value)}
						></textarea>
						<div className="form-symbols">{description.length}/300</div>
					</div>
					<button
						type="button"
						className="form-button form-button--center button"
					>
						Створити проект
					</button>
				</form>
			</div>
		</div>
	)
}

export default FormCreateProject

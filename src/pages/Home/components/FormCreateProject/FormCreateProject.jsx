import { useState } from 'react'
import { useCreateProjectMutation } from '@/api/apiManager'
import useUser from '@/hooks/useUser'
import styles from './FormCreateProject.module.scss'

function FormCreateProject({ setIsOpenPopup }) {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [isError, setIsError] = useState(false)
	const [createProject, { isLoading: isCreating }] = useCreateProjectMutation()
	const { user } = useUser()

	const submitForm = async e => {
		e.preventDefault()
		if (!isValidDateForm()) {
			setIsError(true)
			return
		}
		setIsError(false)

		// FIXME: У Олега когда когда я ему прессылаю пустой description, то у него ошибка!
		// Когда все поля заполнены ошибка нет, проект создается
		await createProject({
			name: name.trim(),
			description: description.trim(),
			ownerId: user.UserId,
		})
		setDescription('')
		setName('')
		setIsOpenPopup(false)
	}

	const isValidDateForm = () => {
		return name.trim()
	}

	const onFocus = () => {
		setIsError(false)
	}

	return (
		<div className={styles['new-project']}>
			<div className={styles['new-project-top']}>
				<div className={styles['new-project-content']}>
					<h4 className={styles['new-project-title']}>Новий проект</h4>
					<div className={styles['new-project-subtitle']}>
						Створіть проект для вашої команди
					</div>
				</div>
				<button
					data-close-modal
					type="button"
					aria-label="close modal window"
					className={styles['new-project-close']}
				></button>
			</div>
			<div className={styles['new-project-body']}>
				<form
					onSubmit={submitForm}
					className={`${styles['new-project-form']} form`}
					action="#"
				>
					<div className="form-line">
						<label htmlFor="name-project" className="form-label --small">
							Назва проекту
						</label>
						<input
							value={name}
							data-required=""
							type="text"
							id="name-project"
							name="name-project"
							className={`form-input input ${isError ? '--error' : ''}`}
							placeholder="Введіть назву проекту"
							maxLength="50"
							onChange={e => setName(e.target.value)}
							onFocus={onFocus}
						/>
						<div className="form-bottom">
							{isError && <div className="error">Обов'язкове поле!</div>}
							<div className="form-symbols">{name.length}/50</div>
						</div>
					</div>
					<div className="form-line">
						<label htmlFor="description-project" className="form-label --small">
							Опис проекту
						</label>
						<textarea
							value={description}
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
						disabled={isCreating}
						type="submit"
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

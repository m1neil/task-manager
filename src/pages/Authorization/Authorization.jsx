import { Link, useLocation } from 'react-router'
import textPage from './options'
import { formData } from './options'
import { useState } from 'react'
import styles from './authorization.module.scss'
import decor from '@img/authorization/decor.svg'
import InputPassword from '@/components/InputPassword'

function Authorization() {
	const namePage = useLocation().pathname.replace('/', '')
	const [userData, setUserData] = useState(() => formData[namePage])
	const contentPage = textPage[namePage]

	const changeUserDate = ({ target }) => {
		const { name, value } = target

		setUserData(prevData => {
			const prevField = prevData[name]
			const newField = { ...prevField, value }
			return { ...prevData, [name]: newField }
		})
	}

	const createField = (item, index) => {
		const [key, data] = item
		let field
		switch (key) {
			case 'user-password':
			case 'repeat-password':
				field = <InputPassword onChange={changeUserDate} {...data} />
				break
			case 'user-role':
				field = (
					<select
						className="form-select select"
						onChange={changeUserDate}
						{...data}
					>
						<option className="select-option" value="" disabled>
							Ваша роль
						</option>
						<option className="select-option" value="Проджект менеджер">
							Проджект менеджер
						</option>
						<option className="select-option" value="Піар менеджер">
							Піар менеджер
						</option>
						<option className="select-option" value="Розробник">
							Розробник
						</option>
						<option className="select-option" value="Тестувальник">
							Тестувальник
						</option>
						<option className="select-option" value="Керівник відділу">
							Керівник відділу
						</option>
					</select>
				)
				break
			default:
				field = (
					<input
						className="form-input input"
						onChange={changeUserDate}
						{...data}
					/>
				)
				break
		}

		return (
			<div key={index} className="form-line">
				<label className="form-label" htmlFor={data.id}>
					{data.label}
				</label>
				{field}
			</div>
		)
	}

	return (
		<section className={styles['authorization']}>
			<div className={styles['authorization-container']}>
				<div className={styles['authorization-content']}>
					<h1 className={`${styles['authorization-title']} title title-big`}>
						{contentPage.title}
					</h1>
					<div className={styles['authorization-text']}>
						{contentPage.text}{' '}
						<Link to={contentPage.link.url}>{contentPage.link.text}</Link>
					</div>
					<form action="#">
						{Object.entries(userData).map(createField)}
						<button className="form-button button" type="submit">
							{contentPage.button}
						</button>
					</form>
				</div>
				<img
					className={styles['authorization-decor']}
					src={decor}
					alt="decor"
					aria-hidden="true"
				/>
				<div className={styles['authorization-circle']}>
					<span></span>
				</div>
			</div>
		</section>
	)
}

export default Authorization

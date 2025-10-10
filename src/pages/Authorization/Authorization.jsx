import { Link, useLocation } from 'react-router'
import textPage from './options'
import { formData } from './options'
import { useState } from 'react'
import iconShowPass from '@/assets/icons/show-pass.png'
import iconClosePass from '@/assets/icons/close-pass.png'
import styles from './authorization.module.scss'
import decor from '@img/authorization/decor.svg'

function Authorization() {
	const namePage = useLocation().pathname.replace('/', '')
	const [userData, setUserData] = useState(() => formData[namePage])
	const contentPage = textPage[namePage]

	const changeUserDate = () => {}

	const createField = (item, index) => {
		const [key, data] = item
		let field
		switch (key) {
			case 'password':
			case 'repeat-password':
				field = (
					<div className="form-password">
						<button className="form-show-pass">
							<img src={iconShowPass} alt="icon open password" />
							<img src={iconClosePass} alt="icon close password" />
						</button>
						<input
							className="form-input input"
							onChange={changeUserDate}
							{...data}
						/>
					</div>
				)
				break
			case 'user-role':
				field = (
					<select
						className="form-select select"
						onChange={changeUserDate}
						{...data}
					>
						<option value="Проджект менеджер">Проджект менеджер</option>
						<option value="Піар менеджер">Піар менеджер</option>
						<option value="Розробник">Розробник</option>
						<option value="Тестувальник">Тестувальник</option>
						<option value="Керівник відділу">Керівник відділу</option>
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

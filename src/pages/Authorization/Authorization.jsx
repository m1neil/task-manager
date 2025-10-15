import { Link, useLocation, useNavigate } from 'react-router'
import textPage from './options'
import { formData } from './options'
import { useEffect, useState } from 'react'
import styles from './authorization.module.scss'
import decor from '@img/authorization/decor.svg'
import InputPassword from '@/components/InputPassword'
import {
	useGetAllSpecializationQuery,
	useRegistrationUserMutation,
	useLoginUserMutation,
} from '@/api/apiManager'
import Select from '@/components/Select'
import frontRoutes from '@/router/frontRoutes'
import { apiRoutes } from '@/api/apiRoutes'
import { createSelectorHook } from 'react-redux'
import { browser } from 'globals'
import useUser from '@/hooks/useUser'

function Authorization() {
	const {
		data: specialization,
		isLoading,
		error,
	} = useGetAllSpecializationQuery()
	const [registrationUser, { isLoading: isRegistration }] =
		useRegistrationUserMutation()
	const [loginUser, { isLoading: isLogin }] = useLoginUserMutation()
	const [errorSubmit, setErrorSubmit] = useState(null)
	const { setUser } = useUser()
	const namePage = useLocation().pathname.replace('/', '')
	const [userData, setUserData] = useState(() => formData[namePage])
	const contentPage = textPage[namePage]
	const navigator = useNavigate()

	const changeUserDate = ({ target }) => {
		const { name, value } = target

		setUserData(prevData => {
			const prevField = prevData[name]
			const newField = {
				...prevField,
				value,
			}
			return { ...prevData, [name]: newField }
		})
	}

	// console.log(userData)
	useEffect(() => {
		setUserData(formData[namePage])
	}, [namePage])

	const createField = (item, index) => {
		const [key, data] = item
		let field
		switch (key) {
			case 'user-password':
			case 'repeat-password':
				field = (
					<>
						<InputPassword onChange={changeUserDate} {...data} />
						{data.error && <div className="error">{data.error}</div>}
					</>
				)
				break
			case 'user-role':
				field = isLoading ? (
					<div>Loading...</div>
				) : error ? (
					<div>Ну вдалося отримати ролi!</div>
				) : (
					<>
						<Select
							onChange={changeUserDate}
							options={specialization.specializations}
							data={data}
						/>
						{data.error && <div className="error">{data.error}</div>}
					</>
				)
				break
			default:
				field = (
					<>
						<input
							className="form-input input"
							data-error-text="Обов'язкове поле!"
							onChange={changeUserDate}
							{...data}
						/>
						{data.error && <div className="error">{data.error}</div>}
					</>
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

	const submitForm = async e => {
		e.preventDefault()
		const { newUserData, amountErrors } = validateForm()
		setUserData(newUserData)
		if (amountErrors) {
			console.log('Данные не корректны!')
			return
		}
		console.log('Данные корректны едем дальше')

		const dataForSend = transformUserDate(newUserData)
		try {
			if (namePage === 'registration') {
				await registrationUser(dataForSend).unwrap()
				navigator(frontRoutes.navigation.login)
			} else {
				await loginUser(dataForSend)
				setUser()
				navigator(frontRoutes.navigation.home)
			}
		} catch (error) {
			setErrorSubmit(error.message)
		}
	}

	const validateForm = () => {
		const newData = JSON.parse(JSON.stringify(userData))
		let amountErrors = 0

		for (const [key, field] of Object.entries(newData)) {
			if (key === 'user-role') {
				console.log('user-role', field.value.trim())
			}

			if (!field.value.trim()) {
				newData[key].error = `Обов'язкове поле!`
				amountErrors++
			} else if (key === 'user-name') {
				if (!field.value.trim().split(' ')[1]) {
					newData[key].error = "Повинне бути вказане ім'я та прізвище!"
					amountErrors++
				} else newData[key].error = ''
			} else if (key === 'user-password') {
				if (field.value.trim().length < 6) {
					newData[key].error = 'Пароль повинен містити щонайменше 6 символи!'
					amountErrors++
				} else newData[key].error = ''
			} else if (key === 'repeat-password') {
				const repeatPassword = field.value.trim()
				const password = newData['user-password'].value.trim()
				if (repeatPassword !== password) {
					field.error = 'Паролі не збігаються!'
					amountErrors++
				} else field.error = ''
			} else if (key === 'user-email') {
				if (!isValidEmail(field.value.trim())) {
					field.error = 'Не правильно зазначен email!'
					amountErrors++
				} else field.error = ''
			} else field.error = ''
		}

		return { newUserData: newData, amountErrors }
	}

	errorSubmit && console.error(errorSubmit)

	const isValidEmail = value => {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
		return emailRegex.test(value)
	}

	const transformUserDate = userData => {
		console.log(userData)

		const dataForSubmit = {}
		for (const [key, field] of Object.entries(userData)) {
			switch (key) {
				case 'user-name': {
					const [firstName, secondName] = field.value.trim().split(' ')
					dataForSubmit['firstName'] = firstName
					dataForSubmit['lastName'] = secondName
					break
				}
				case 'user-email':
					dataForSubmit['email'] = field.value.trim()
					break
				case 'user-password':
					dataForSubmit['password'] = field.value
					break
				case 'user-role':
					dataForSubmit['specializationId'] = parseInt(field.value)
					break
			}
		}
		return dataForSubmit
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
					<form onSubmit={submitForm} action="#">
						{Object.entries(userData).map(createField)}
						<button
							className="form-button button"
							type="submit"
							disabled={isRegistration || isLogin}
						>
							{contentPage.button}
						</button>
						{}
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

import frontRoutes from '@/router/frontRoutes'

const textPage = {
	registration: {
		title: 'Реєстрація',
		text: 'Вже маєте обліковий запис?',
		link: {
			url: frontRoutes.navigation.login,
			text: 'Увійти',
		},
		button: 'Зареєструватись',
	},
	login: {
		title: 'Вхід',
		text: 'Новий користувач?',
		link: {
			url: frontRoutes.navigation.registration,
			text: 'Створіть обліковий запис',
		},
		button: 'Увійти',
	},
}

export const formData = {
	registration: {
		'user-email': {
			id: 'user-email',
			type: 'text',
			value: '',
			name: 'user-email',
			label: 'Адреса електронної пошти',
			error: '',
		},
		'user-password': {
			id: 'user-password',
			type: 'password',
			value: '',
			name: 'user-password',
			label: 'Пароль',
			error: '',
		},
		'repeat-password': {
			id: 'repeat-password',
			type: 'password',
			value: '',
			name: 'repeat-password',
			label: 'Повторіть пароль',
			error: '',
		},
		'user-name': {
			id: 'user-name',
			type: 'text',
			value: '',
			name: 'user-name',
			label: 'Ім’я та прізвище',
			error: '',
		},
		'user-role': {
			id: 'user-role',
			type: 'text',
			value: '',
			name: 'user-role',
			label: 'Роль',
			error: '',
		},
	},
	login: {
		'user-email': {
			id: 'user-email',
			type: 'text',
			value: '',
			name: 'user-email',
			label: 'Адреса електронної пошти',
			error: '',
		},
		'user-password': {
			id: 'user-password',
			type: 'password',
			value: '',
			name: 'user-password',
			label: 'Пароль',
			error: '',
		},
	},
}

export default textPage

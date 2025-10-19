import { useDispatch, useSelector } from 'react-redux'
import {
	setUser as setUserStore,
	logout as logoutUserStore,
} from '@/store/slices/userSlice'

class DecodeCookie {
	static decodeToken(token) {
		const base64Url = token.split('.')[1]
		const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
		const jsonPayload = decodeURIComponent(
			atob(base64)
				.split('')
				.map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
				.join('')
		)
		return JSON.parse(jsonPayload)
	}
	static isRelevanceCookie(token) {
		const { exp } = this.decodeToken(token)
		const currentDate = Date.now() / 1000
		return currentDate < exp
	}
}

const useUser = () => {
	const user = useSelector(state => state.user.data)
	const dispatch = useDispatch()

	const setUser = () => {
		const regExp = /Cookies-PostBinar=(?<token>[^;]*)/
		const token = document.cookie.match(regExp)?.groups?.token
		if (!token) return
		const userData = DecodeCookie.decodeToken(token)
		userData.isAuthorized = DecodeCookie.isRelevanceCookie(token)
		if (userData.isAuthorized) dispatch(setUserStore(userData))
		else removeCookie()
	}

	const logoutUser = () => {
		dispatch(logoutUserStore())
		removeCookie()
	}

	const removeCookie = () => {
		document.cookie =
			'Cookies-PostBinar=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
	}

	return { user, setUser, logoutUser }
}

export default useUser

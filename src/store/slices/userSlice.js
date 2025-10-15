import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: {
		userId: '',
		Email: '',
		FullName: '',
		exp: null,
		isAuthorized: false,
	},
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.data = action.payload
		},
		logout: state => {
			state.data = initialState.data
		},
		updateUser: (state, action) => {},
	},
})

export const { setUser, logout, updateUser } = userSlice.actions
export default userSlice.reducer

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiRoutes } from './apiRoutes'

const BASE_URL = 'http://localhost:8080/'

export const apiManager = createApi({
	reducerPath: 'apiManager',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: builder => ({
		getAllSpecialization: builder.query({
			query: () => apiRoutes.specialization.getAll,
		}),
		registrationUser: builder.mutation({
			query: data => ({
				url: apiRoutes.user.registration,
				method: 'POST',
				body: data,
			}),
		}),
		loginUser: builder.mutation({
			query: data => ({
				url: apiRoutes.user.login,
				method: 'POST',
				data: data,
			}),
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetAllSpecializationQuery,
	useRegistrationUserMutation,
	useLoginUserMutation,
} = apiManager

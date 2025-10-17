/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiRoutes } from './apiRoutes'

const BASE_URL = 'http://localhost:8080/'

export const apiManager = createApi({
	reducerPath: 'apiManager',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
	tagTypes: ['Projects'],
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
				body: data,
			}),
		}),
		// Projects
		getAllProjects: builder.query({
			query: userId => apiRoutes.projects.getAll(userId),
			providesTags: ['Projects'],
		}),
		createProject: builder.mutation({
			query: data => ({
				url: apiRoutes.projects.create,
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Projects'],
		}),
		deleteProject: builder.mutation({
			query: idProject => ({
				url: apiRoutes.projects.delete(idProject),
				method: 'DELETE',
			}),
			invalidatesTags: ['Projects'],
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetAllSpecializationQuery,
	useRegistrationUserMutation,
	useLoginUserMutation,
	useGetAllProjectsQuery,
	useCreateProjectMutation,
	useDeleteProjectMutation,
} = apiManager

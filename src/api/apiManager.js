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
		getProjectById: builder.query({
			query: projectId => apiRoutes.projects.getProjectById(projectId),
			providesTags: (results, error, id) => [{ type: 'Projects', id }],
		}),
		getAllProjectFiles: builder.query({
			query: projectId => apiRoutes.projects.getAllProjectFiles(projectId),
			providesTags: (results, error, id) => [{ type: 'Projects', id }],
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
		addProjectFile: builder.mutation({
			query: ({ file, idProject }) => {
				const formData = new FormData()
				formData.append('ProjectId', idProject)
				formData.append('ObjectId', idProject)
				formData.append('file', file)

				return {
					url: apiRoutes.projects.addFile,
					method: 'POST',
					body: formData,
				}
			},
		}),
		// File
		getLinkDownloadFile: builder.query({
			query: idFile => apiRoutes.file.getDownloadLink(idFile),
			providesTags: (results, error, id) => [{ type: 'Projects', id }],
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetAllSpecializationQuery,
	useGetProjectByIdQuery,
	useGetAllProjectFilesQuery,
	useRegistrationUserMutation,
	useLoginUserMutation,
	useGetAllProjectsQuery,
	useCreateProjectMutation,
	useDeleteProjectMutation,
	useAddProjectFileMutation,
	useGetLinkDownloadFileQuery,
} = apiManager

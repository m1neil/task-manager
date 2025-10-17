export const apiRoutes = {
	user: {
		registration: 'api/User/Register', //post
		login: 'api/User/Login', //post
	},
	specialization: {
		getAll: 'api/Specialization/GetAllSpecializations',
	},
	projects: {
		getAll: idUser => `/api/Project/GetAllProjects?userId=${idUser}`,
		create: '/api/Project/Create',
		delete: idProject => `/api/Project/Delete/${idProject}`,
	},
}

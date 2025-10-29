export const apiRoutes = {
	user: {
		registration: 'api/User/Register', //post
		login: 'api/User/Login', //post
	},
	specialization: {
		getAll: 'api/Specialization/GetAllSpecializations',
	},
	projects: {
		getAll: idUser => `api/Project/GetAllProjects?userId=${idUser}`,
		create: 'api/Project/Create',
		delete: idProject => `api/Project/Delete/${idProject}`,
		getProjectById: idProject =>
			`api/Project/GetProjectById?projectId=${idProject}`,
		addFile: 'api/FileStorages/UploadFileForProject',
		getAllProjectFiles: idProject =>
			`api/FileStorages/GetFilesByProject?projectId=${idProject}`,
	},
	file: {
		getDownloadLink: idFile =>
			`api/FileStorages/GetFileDownloadUrl?fileStorageId=${idFile}`,
	},
}

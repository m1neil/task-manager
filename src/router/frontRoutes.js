const frontRoutes = {
	pages: {
		home: '/',
		profile: '/profile',
		registration: '/registration',
		login: '/login',
		project: {
			base: `/project/:id`,
			note: 'note/:id',
			task: 'task/:id',
			createNote: 'editor-note/:id?',
			createTask: 'editor-task/:id?',
			participants: 'participants',
		},
	},
	navigation: {
		home: '/',
		profile: '/profile',
		registration: '/registration',
		login: '/login',
		project: {
			base: id => `/project/${id}`,
			note: (idProject, idNote) => `/project/${idProject}/note/${idNote}`,
			task: (idProject, idTask) => `/project/${idProject}/task/${idTask}`,
			createNote: (idProject, idNote = '') =>
				`/project/${idProject}/editor-note/${idNote}`,
			createTask: (idProject, idTask) =>
				`/project/${idProject}/editor-task/${idTask}`,
			participants: idProject => `/project/${idProject}/participants`,
		},
	},
}

export default frontRoutes

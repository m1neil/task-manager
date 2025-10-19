import { createBrowserRouter } from 'react-router'
import App from '@/Layout/App'
import ErrorPage from '@/pages/ErrorPage/ErrorPage'
import Page404 from '@/pages/Page404/Page404'
import frontRoutes from './frontRoutes'
import Home from '@/pages/Home/Home'
import Project from '@/pages/Project/Project'
import Note from '@/pages/Note/Note'
import Task from '@/pages/Task/Task'
import NoteForm from '@/pages/NoteForm/NoteForm'
import TaskForm from '@/pages/TaskForm/TaskForm'
import Profile from '@/pages/Profile/Profile'
import About from '@/pages/About/About'
import Authorization from '@/pages/Authorization/Authorization'

export const routes = [
	{
		path: frontRoutes.pages.home,
		Component: Home,
		meta: {
			title: 'Проекти',
			link: frontRoutes.navigation.home,
		},
	},
	{
		path: frontRoutes.pages.profile,
		Component: Profile,
		meta: {
			title: 'Налаштування',
			link: frontRoutes.navigation.profile,
		},
	},
	{
		path: frontRoutes.pages.about,
		Component: About,
		meta: {
			title: 'Про нас',
			link: frontRoutes.navigation.about,
		},
	},
	{
		path: frontRoutes.pages.login,
		Component: Authorization,
	},
	{
		path: frontRoutes.pages.registration,
		Component: Authorization,
	},
	{
		path: frontRoutes.pages.project.base,
		children: [
			{
				index: true,
				Component: Project,
			},
			{
				path: frontRoutes.pages.project.note,
				Component: Note,
			},
			{
				path: frontRoutes.pages.project.task,
				Component: Task,
			},
			{
				path: frontRoutes.pages.project.createNote,
				Component: NoteForm,
			},
			{
				path: frontRoutes.pages.project.createTask,
				Component: TaskForm,
			},
		],
	},
	{
		path: '*',
		Component: <Page404 />,
	},
]

export const router = createBrowserRouter([
	{
		path: '',
		Component: App,
		errorElement: <ErrorPage />,
		children: routes,
	},
])

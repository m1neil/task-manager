import App from '@/components/App'
import ErrorPage from '@/pages/ErrorPage/ErrorPage'
import Page404 from '@/pages/Page404/Page404'
import { createBrowserRouter } from 'react-router'

export const routes = [
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

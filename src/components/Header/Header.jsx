import { routes } from '@/router'
import frontRoutes from '@/router/frontRoutes'
import { NavLink } from 'react-router'
import SearchProjects from './components/SearchProjects/SearchProjects'
import styles from './header.module.scss'
import useUser from '@/hooks/useUser'
import { useEffect } from 'react'
import UserProfile from './components/UserProfile/UserProfile'

function Header() {
	const menu = routes.filter(item => item.meta).map(itemList => itemList.meta)
	const { user, setUser } = useUser()
	useEffect(() => {
		setUser()
	}, [])

	const createMenu = () => {
		const items = menu.map((itemMenu, index) => (
			<li key={index} className={styles['menu-item']}>
				<NavLink
					to={itemMenu.link}
					className={({ isActive }) =>
						isActive
							? `${styles['menu-link']} ${styles['active']}`
							: styles['menu-link']
					}
				>
					{itemMenu.title}
				</NavLink>
			</li>
		))
		return <ul className={styles['menu-list']}>{items}</ul>
	}

	const linksAuthentication = [
		{
			url: frontRoutes.navigation.login,
			title: 'Вхід',
		},
		{
			url: frontRoutes.navigation.registration,
			title: 'Зареєструватися',
		},
	]

	return (
		<header className={styles['header']}>
			<div className={styles['header-container']}>
				{user?.isAuthorized ? (
					<UserProfile />
				) : (
					<div className={styles['header-actions']}>
						{linksAuthentication.map((link, index) => (
							<NavLink
								key={index}
								className={({ isActive }) =>
									isActive
										? `${styles['header-link']} ${styles['active']}`
										: styles['header-link']
								}
								to={link.url}
							>
								{link.title}
							</NavLink>
						))}
					</div>
				)}

				<SearchProjects suffix={styles['header-search']} />
				<div className={`${styles['header-menu']} ${styles['menu']}`}>
					<nav className={styles['menu-body']}>{createMenu()}</nav>
					<button
						type="button"
						className={`${styles['menu-icon']} ${styles['icon-menu']}`}
					>
						<span></span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header

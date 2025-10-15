import useUser from '@/hooks/useUser'
import styles from './userProfile.module.scss'

function UserProfile() {
	const { user, logoutUser } = useUser()
	const [firstName, lastName] = user.FullName.split(' ')

	return (
		<div className={styles['profile']}>
			<button className={styles['profile-title']} type="button">
				<span className={styles['profile-decor']}>
					{firstName[0]}
					{lastName[0]}
				</span>
				<span className={styles['profile-name']}>{user.FullName}</span>
			</button>
			<div className={styles['profile-options']}>
				<ul className={styles['profile-list']}>
					<li className={styles['profile-item']}>
						<button
							className={styles['profile-button']}
							onClick={logoutUser}
							type="button"
						>
							Вийти з акаунту
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default UserProfile

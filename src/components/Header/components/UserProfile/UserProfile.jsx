import useUser from '@/hooks/useUser'

function UserProfile() {
	const { user, logoutUser } = useUser()
	const [firstName, lastName] = user.FullName.split(' ')

	return (
		<div className="profile">
			<button className="profile-button" type="button">
				<span>
					{firstName[0]}
					{lastName[0]}
				</span>
				{user.FullName}
			</button>
			<div className="profile-options">
				<ul className="profile-list">
					<li className="profile-item">
						<button onClick={logoutUser} type="button">
							Вийти з акаунту
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default UserProfile

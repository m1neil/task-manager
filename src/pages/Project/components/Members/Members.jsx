import './Members.scss'

function Members() {
	return (
		<div className="members">
			<div className="members-list">
				{/*TODO: Подумать над тем чтобы сделать это ссылка и при клике будет открываться попап с пользователем */}
				<div className="members-item"></div>
				<div className="members-item"></div>
				<div className="members-item"></div>
			</div>
			<div className="members-amount">+ 10 людей</div>
		</div>
	)
}

export default Members

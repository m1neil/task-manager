import styles from './Members.module.scss'

function Members() {
	return (
		<div className={styles.members}>
			<div className={styles['members-list']}>
				{/*TODO: Подумать над тем чтобы сделать это ссылка и при клике будет открываться попап с пользователем */}
				<div className={styles['members-item']}></div>
				<div className={styles['members-item']}></div>
				<div className={styles['members-item']}></div>
			</div>
			<div className={styles['members-amount']}>+ 10 людей</div>
		</div>
	)
}

export default Members

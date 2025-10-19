import { Link } from 'react-router'
import styles from './Note.module.scss'

function Note() {
	return (
		<article className={styles.note}>
			<Link className={styles['note-link']}>
				<h4 className={styles['note-title']}>Ідеї для проекту</h4>
				<div className={styles['note-description']}>
					<p>
						Реалізувати систему сповіщень, додати темну тему, покращити
						продуктивність завантаження даних
					</p>
				</div>
				<div className={styles['note-date']}>23 серпня, 2025</div>
			</Link>
		</article>
	)
}

export default Note

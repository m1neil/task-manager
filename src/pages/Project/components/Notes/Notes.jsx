import Note from '../Note/Note'
import styles from './Notes.module.scss'

function Notes() {
	return (
		<div className={styles.notes}>
			<div className={styles['notes-list']}>
				<Note />
				<Note />
				<Note />
				<Note />
				<Note />
				<Note />
			</div>
			<button
				type="button"
				className={`${styles['notes-create']} button button-small button-full`}
			>
				Створити нову нотатку
			</button>
		</div>
	)
}

export default Notes

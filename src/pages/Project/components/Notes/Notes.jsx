import { Link } from 'react-router'
import Note from '../Note/Note'
import styles from './Notes.module.scss'
import frontRoutes from '@/router/frontRoutes'

function Notes({ projectId }) {
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
			<Link
				to={frontRoutes.navigation.project.createNote(projectId)}
				className={`${styles['notes-create']} button button-small button-full`}
			>
				Створити нову нотатку
			</Link>
		</div>
	)
}

export default Notes

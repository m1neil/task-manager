import useUser from '@/hooks/useUser'
import Editor from './Editor/Editor'
import './NoteForm.scss'

function NoteForm() {
	const { user } = useUser()
	const placeholderEditor = '<p>Почніть писати свою нотатку тут...</p>'

	return (
		<section className="note">
			<div className="note-container">
				<div className="note-content">
					<h1 className="note-title title">Нова нотатка</h1>
					<input
						type="text"
						placeholder="Введіть заголовок нотатки..."
						className="note-input"
					/>
					<div className="note-info info">
						<div className="info-date">23 серпня, 2025</div>
						<div className="info-user">{user.FullName}</div>
						<div className="info-access">Тільки для мене</div>
					</div>
					<div className="note-row">
						<Editor placeholder={placeholderEditor} />
						<aside className="note-sidebar sidebar"></aside>
					</div>
				</div>
			</div>
		</section>
	)
}

export default NoteForm

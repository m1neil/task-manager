// import { convertBytesToImage } from '@/utils/convertBytesToImage'
import styles from './Files.module.scss'
import { useRef } from 'react'
import { useAddProjectFileMutation } from '@/api/apiManager'
import File from '../File/File'

function Files({ idProject, files }) {
	const fileInput = useRef(null)
	const [addProjectFile, { isLoading: isSending }] = useAddProjectFileMutation()

	const openExplorer = () => {
		fileInput.current.click()
	}

	const sendFile = async ({ target }) => {
		const file = target.files[0]
		try {
			await addProjectFile({ file, idProject })
			console.log('Успех')
		} catch (error) {
			console.error(error.message)
			console.warn('Ошибка отправки!')
		}
	}

	return (
		<div className={`${styles['statistics-files']} ${styles.files}`}>
			<h2 className={`${styles['files-title']} title title-decor`}>
				Вкладені файли
			</h2>
			<div className={styles['files-items']}>
				{files.map(file => (
					<File key={file.fileStorageId} {...file} />
				))}
			</div>
			<button
				type="button"
				onClick={openExplorer}
				disabled={isSending}
				className={`${styles['files-add']} button button button-small`}
			>
				Додати файл
			</button>
			<input
				onChange={sendFile}
				className={styles['files-input']}
				ref={fileInput}
				type="file"
			/>
		</div>
	)
}

export default Files

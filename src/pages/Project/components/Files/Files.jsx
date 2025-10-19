import iconDownload from '@/assets/icons/download.png'
import iconQrCode from '@/assets/icons/qr-code.svg'
import iconTrash from '@/assets/icons/trash.png'
import iconPDF from '@/assets/icons/files/pdf.svg'
// import { convertBytesToImage } from '@/utils/convertBytesToImage'
import styles from './Files.module.scss'

function Files() {
	return (
		<div className={`${styles['statistics-files']} ${styles.files}`}>
			<h2 className={`${styles['files-title']} title title-decor`}>
				Вкладені файли
			</h2>
			<div className={styles['files-items']}>
				<div className={styles.file}>
					<img src={iconPDF} alt="file icon" className={styles['file-icon']} />
					<div className={styles['file-content']}>
						<div className={styles['file-name']}>User-Journey.pdf</div>
						<div className={styles['file-size']}>1.4 MB</div>
					</div>
					<div className={styles['files-actions']}>
						<button type="button" className={styles['file-download']}>
							<img src={iconDownload} alt="Image" />
						</button>
						<button type="button" className={styles['file-code']}>
							<img src={iconQrCode} alt="Image" />
						</button>
						<button type="button" className={styles['file-delete']}>
							<img src={iconTrash} alt="Image" />
						</button>
					</div>
				</div>
				<div className={styles.file}>
					<img src={iconPDF} alt="file icon" className={styles['file-icon']} />
					<div className={styles['file-content']}>
						<div className={styles['file-name']}>User-Journey.pdf</div>
						<div className={styles['file-size']}>1.4 MB</div>
					</div>
					<div className={styles['files-actions']}>
						<a href="#" className={styles['file-download']} download>
							<img src={iconDownload} alt="Image" />
						</a>
						<button type="button" className={styles['file-code']}>
							<img src={iconQrCode} alt="Image" />
						</button>
						<button type="button" className={styles['file-delete']}>
							<img src={iconTrash} alt="Image" />
						</button>
					</div>
				</div>
			</div>
			<button
				type="button"
				className={`${styles['files-add']} button button button-small`}
			>
				Додати файл
			</button>
		</div>
	)
}

export default Files

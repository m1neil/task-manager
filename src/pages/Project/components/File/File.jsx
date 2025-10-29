import { convertBytesToImage } from '@/utils/convertBytesToImage'
import iconDownload from '@/assets/icons/download.png'
import iconQrCode from '@/assets/icons/qr-code.svg'
import iconTrash from '@/assets/icons/trash.png'
import iconPDF from '@/assets/icons/files/pdf.svg'
import iconDoc from '@/assets/icons/files/doc.svg'
import iconPpt from '@/assets/icons/files/ppt.svg'
import iconExcel from '@/assets/icons/files/xlc.svg'
import iconPng from '@/assets/icons/files/png.png'
import iconMp4 from '@/assets/icons/files/mp4.png'
import iconText from '@/assets/icons/files/text.png'
import iconJpeg from '@/assets/icons/files/jpeg.png'
import iconMkv from '@/assets/icons/files/mkv.png'
import iconUnknownFile from '@/assets/icons/files/unknownFile.png'

import styles from './File.module.scss'
import { useGetLinkDownloadFileQuery } from '@/api/apiManager'

function formatFileSize(bytes) {
	if (bytes === 0) return '0 B'
	const k = 1024
	const sizes = ['B', 'KB', 'MB', 'GB']
	const i = Math.floor(Math.log(bytes) / Math.log(k))
	return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}

const getIconFile = typeFile => {
	console.log(typeFile)

	const iconsFile = {
		'vnd.openxmlformats-officedocument.wordprocessingml.document': iconDoc,
		pdf: iconPDF,
		pptx: iconPpt,
		xlcx: iconExcel,
		png: iconPng,
		jpeg: iconJpeg,
		jpg: iconJpeg,
		plain: iconText,
		mp4: iconMp4,
		mkv: iconMkv,
	}

	return iconsFile[typeFile] ?? iconUnknownFile
}

function File({ fileStorageId, fileName, mimeType, size, createdAt }) {
	const { data, isLoading, error } = useGetLinkDownloadFileQuery(fileStorageId)
	console.log(data)

	return (
		<div className={styles.file}>
			<img
				src={getIconFile(mimeType.split('/')[1])}
				alt="file icon"
				className={styles['file-icon']}
			/>
			<div className={styles['file-content']}>
				<div className={styles['file-name']}>{fileName}</div>
				<div className={styles['file-size']}>{formatFileSize(size)}</div>
			</div>
			<div className={styles['files-actions']}>
				<a
					download
					target="_blank"
					href={data?.value.url ?? ''}
					type="button"
					className={`${styles['file-download']} ${
						!data && styles['disabled']
					}`}
				>
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
	)
}

export default File

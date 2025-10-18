import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import { bodyUtile } from '@/utils/bodyUtile'
import styles from './Popup.module.scss'

function Popup({ selector, children, isOpen, onClose, delay }) {
	useEffect(() => {
		if (isOpen) {
			bodyUtile.bodyLock()
			document.addEventListener('keydown', onClose)
		} else {
			bodyUtile.bodyUnLock(delay)
			document.removeEventListener('keydown', onClose)
		}
	}, [isOpen])

	if (!document.querySelector(selector)) return null

	return createPortal(
		<div
			onClick={onClose}
			className={`${styles['popup']} ${isOpen ? styles['--open'] : ''}`}
		>
			<div className={styles['popup-container']}>
				<div data-body-popup className={styles['popup-body']}>
					{children}
				</div>
			</div>
		</div>,
		document.querySelector(selector)
	)
}

export default Popup

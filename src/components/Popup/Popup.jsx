import { createPortal } from 'react-dom'
import './popup.scss'
import { useEffect } from 'react'
import { bodyUtile } from '@/utiles/bodyUtile'

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
			onKeyDown={onClose}
			className={`popup ${isOpen && 'popup--open'}`}
		>
			<div className="popup-container">
				<div className="popup-body">{children}</div>
			</div>
		</div>,
		document.querySelector(selector)
	)
}

export default Popup

import { createPortal } from 'react-dom'

function Popup({ children, isOpen, onClose }) {
	return createPortal(
		<div
			onClick={onClose}
			data-open={isOpen}
			onKeyDown={onClose}
			className="popup"
		>
			<div className="popup-container">{children}</div>
		</div>,
		document.querySelector('#modal-root')
	)
}

export default Popup

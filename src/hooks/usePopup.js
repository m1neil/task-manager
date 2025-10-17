import { useEffect, useRef, useState } from 'react'

const usePopup = delayAnimation => {
	const [isOpen, setIsOpen] = useState(false)
	const isAnimationRef = useRef(false)

	useEffect(() => {
		isAnimationRef.current = true
		const timeoutAnimation = setTimeout(() => {
			isAnimationRef.current = false
		}, delayAnimation)
		return () => clearTimeout(timeoutAnimation)
	}, [isOpen])

	const onOpen = () => {
		if (isAnimationRef.current) return
		setIsOpen(true)
	}

	const onClose = ({ type, target, code }) => {
		if (isAnimationRef.current) return
		let isClosePopup
		if (type === 'click')
			isClosePopup =
				!target.closest('.popup-body') || target.closest('[data-close-modal]')
		else if (code === 'Escape') isClosePopup = true
		if (isClosePopup) setIsOpen(false)
	}

	return [isOpen, setIsOpen, onOpen, onClose]
}

export default usePopup

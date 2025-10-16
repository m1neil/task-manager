import useUser from '@/hooks/useUser'
import ProjectsList from './components/ProjectsList/ProjectsList'
import Popup from '@/components/Popup/Popup'
import { useEffect, useMemo, useRef, useState } from 'react'
import styles from './home.module.scss'
import FormCreateProject from './components/FormCreateProject/FormCreateProject'

function Home() {
	const { user } = useUser()
	const [isOpenPopup, setIsOpenPopup] = useState(false)
	const isAnimationRef = useRef(false)
	const animationDuration = 300

	useEffect(() => {
		isAnimationRef.current = true
		const timeoutAnimation = setTimeout(() => {
			isAnimationRef.current = false
		}, animationDuration)
		return () => clearTimeout(timeoutAnimation)
	}, [isOpenPopup])

	const onOpen = () => {
		if (isAnimationRef.current) return
		setIsOpenPopup(true)
	}

	const onClose = ({ type, target, code }) => {
		if (isAnimationRef.current) return
		let isClosePopup
		if (type === 'click')
			isClosePopup =
				!target.closest('.popup-body') || target.closest('[data-close-modal]')
		else if (code === 'Escape') isClosePopup = true
		if (isClosePopup) setIsOpenPopup(false)
	}

	return (
		<section className={styles.home}>
			<div className={styles['home-container']}>
				<h1 className={`${styles['home-title']} title title-big`}>Проекти</h1>
				{user.UserId && (
					<>
						<button
							type="button"
							className={`${styles['home-add']} button`}
							onClick={onOpen}
						>
							Додати проект
						</button>
						<Popup
							delay={animationDuration}
							selector={'#popup-create-project'}
							isOpen={isOpenPopup}
							onClose={onClose}
						>
							<FormCreateProject />
						</Popup>
					</>
				)}
				{!user.UserId ? 'Зареєструйтесь в додатку' : <ProjectsList />}
			</div>
		</section>
	)
}

export default Home

import useUser from '@/hooks/useUser'
import ProjectsList from './components/ProjectsList/ProjectsList'
import Popup from '@/components/Popup/Popup'
import FormCreateProject from './components/FormCreateProject/FormCreateProject'
import usePopup from '@/hooks/usePopup'
import styles from './Home.module.scss'

function Home() {
	const { user } = useUser()
	const [isOpenPopup, setIsOpen, onOpenPopup, onClosePopup] = usePopup(300)

	return (
		<section className={styles.home}>
			<div className={styles['home-container']}>
				<h1 className={`${styles['home-title']} title title-big`}>Проекти</h1>
				{user.UserId && (
					<>
						<button
							type="button"
							className={`${styles['home-add']} button`}
							onClick={onOpenPopup}
						>
							Додати проект
						</button>
						<Popup
							delay={300}
							selector={'#popup-create-project'}
							isOpen={isOpenPopup}
							onClose={onClosePopup}
						>
							<FormCreateProject setIsOpenPopup={setIsOpen} />
						</Popup>
					</>
				)}
				{!user.UserId ? 'Зареєструйтесь в додатку' : <ProjectsList />}
			</div>
		</section>
	)
}

export default Home

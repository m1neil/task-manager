import { Link, useParams } from 'react-router'
import Members from './components/Members/Members'
import Progress from './components/Progress/Progress'
import Statistics from './components/Statistics/Statistics'
import Files from './components/Files/Files'
import Notes from './components/Notes/Notes'
import Tasks from './components/Tasks/Tasks'
import {
	useGetAllProjectFilesQuery,
	useGetProjectByIdQuery,
} from '@/api/apiManager'
import { getTransformDate } from '@/utils/getTransformDate'
import './Project.scss'
import { useEffect, useState } from 'react'
import frontRoutes from '@/router/frontRoutes'
import usePopup from '@/hooks/usePopup'
import Popup from '@/components/Popup/Popup'
import { convertBytesToImage } from '@/utils/convertBytesToImage'

function Project() {
	const { id } = useParams()
	const {
		data: project,
		isLoading,
		error,
		refetch,
	} = useGetProjectByIdQuery(id)
	const {
		data: files,
		isLoading: isGettingFiles,
		error: errorGetFiles,
	} = useGetAllProjectFilesQuery(id)
	const [selectedQr, setSelectedQr] = useState(null)
	const [isOpen, setIsOpen, onOpen, onClose] = usePopup(300)

	useEffect(() => {
		/* TODO: Протестировать, работает ли когда меняется id проекта. 
		Так же написать, что если по итогу ошибка то либо переводить на страницу 404 или писать что проект такой не найден
		*/
		refetch(id)
	}, [id])

	useEffect(() => {
		let timeout
		if (!isOpen && selectedQr) {
			timeout = setTimeout(() => {
				setSelectedQr(null)
			}, 300)
		}
		return () => clearTimeout(timeout)
	}, [isOpen])

	console.log(project)
	console.log('id', id)

	const { name, createdAt, description, projectMemberships } = project ?? {}

	return (
		<>
			<section className="project">
				<div className="project-container">
					{isLoading && <div>Завантаження....</div>}
					{error && <div>Не вдалося отримати дані про проект!</div>}
					{project && (
						<>
							<div className="project-content">
								<div className="project-top">
									<h1 className="project-name title title-middle">{name}</h1>
									<div className="project-date">
										{getTransformDate(createdAt)}
									</div>
									<div className="project-text text">
										<p>{description}</p>
									</div>
									{projectMemberships.length > 0 && <Members />}
								</div>
								<div className="project-info">
									<Progress />
									<Statistics />
									{isGettingFiles && <div>Loading...</div>}
									{files && (
										<Files
											setIsOpenPopup={setIsOpen}
											idProject={id}
											files={files.files}
											setSelectedQr={setSelectedQr}
										/>
									)}
									{errorGetFiles && <div>Ошибка получение файлов!</div>}
								</div>
							</div>
							<div className="project-content">
								<div className="project-lists">
									<div className="project-list">
										<h2 className="project-label title title-decor">Нотатки</h2>
										<Notes projectId={id} />
									</div>
									<div className="project-list project-list-flex">
										<h2 className="project-label title title-decor">
											Завдання
										</h2>
										<div className="project-tasks">
											<Tasks title="Всі завдання" />
											<Tasks title="Мої завдання" />
										</div>
										<Link
											to={frontRoutes.navigation.project.createTask()}
											className="button button-small button-full"
										>
											Створити нове завдання
										</Link>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</section>
			{/* selector, children, isOpen, onClose, delay */}
			<Popup delay={300} selector="#popup-qr" isOpen={isOpen} onClose={onClose}>
				<div className="code">
					{!selectedQr && <div>Loading...</div>}
					{selectedQr && (
						<img
							className="code-qr"
							src={convertBytesToImage(selectedQr)}
							alt="Image"
						/>
					)}
				</div>
			</Popup>
		</>
	)
}

export default Project

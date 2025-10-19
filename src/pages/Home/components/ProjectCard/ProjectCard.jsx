import frontRoutes from '@/router/frontRoutes'
import { Link } from 'react-router'
import iconTrash from '@/assets/icons/trash.png'
import iconMember from '@/assets/icons/member.png'
import { memo } from 'react'
import { useDeleteProjectMutation } from '@/api/apiManager'
import { getTransformDate } from '@/utils/getTransformDate'
import styles from './ProjectCard.module.scss'

function ProjectCard({ projectId, name, createdAt, description }) {
	const [deleteProject, { isLoading: isDeleting }] = useDeleteProjectMutation()

	const removeProject = () => {
		deleteProject(projectId)
	}

	return (
		<article className={styles['project-card']}>
			<div className={styles['project-card-body']}>
				<h3 className={styles['project-card-name']}>
					<Link to={frontRoutes.navigation.project.base(projectId)}>
						{name}
					</Link>
				</h3>
				<div className={styles['project-card-date']}>
					{getTransformDate(createdAt)}
				</div>
				<div className={styles['project-card-description']}>{description}</div>
			</div>
			<div className={styles['project-card-actions']}>
				<button
					type="button"
					aria-label="remove project"
					disabled={isDeleting}
					className={`${styles['project-card-button']} ${styles['red']}`}
					onClick={removeProject}
				>
					<img src={iconTrash} alt="Image" />
				</button>
				<button
					aria-label="add member"
					className={styles['project-card-button']}
					type="button"
				>
					<img src={iconMember} alt="Image" />
				</button>
			</div>
		</article>
	)
}

export default memo(ProjectCard)

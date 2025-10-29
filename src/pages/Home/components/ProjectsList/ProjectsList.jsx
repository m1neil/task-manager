import { useGetAllProjectsQuery } from '@/api/apiManager'
import useUser from '@/hooks/useUser'
import ProjectCard from '../ProjectCard/ProjectCard'

function ProjectsList() {
	const { user } = useUser()
	const {
		data: projects,
		isLoading,
		error,
	} = useGetAllProjectsQuery(user.UserId, {
		skip: !user.UserId,
	})

	console.log(error?.message)

	if (isLoading) return <div>Loading...</div>
	else if (error)
		return <div className="error">Не вдалося отримати проекти!</div>
	else if (!projects?.projects.length)
		return <div>Не створено жодного проекту!</div>

	return (
		<div style={{ minWidth: 0 }}>
			{projects.projects.map(project => (
				<ProjectCard key={project.projectId} {...project} />
			))}
		</div>
	)
}

export default ProjectsList

import iconSearch from '@/assets/icons/search.svg'
import styles from './searchProjects.module.scss'

function SearchProjects({ suffix }) {
	return (
		<form className={`${suffix} ${styles['search']}`}>
			<input
				type="search"
				name="search-project"
				placeholder="Пошук"
				className={styles['search-input']}
			/>
			<button type="submit" className={styles['search-button']}>
				<img src={iconSearch} alt="search icon" />
			</button>
		</form>
	)
}

export default SearchProjects

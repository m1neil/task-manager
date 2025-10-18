import iconSearch from '@/assets/icons/search.svg'
import { useState } from 'react'
import styles from './SearchProjects.module.scss'

function SearchProjects({ suffix }) {
	const [search, setSearch] = useState('')

	return (
		<form className={`${suffix} ${styles['search']}`}>
			<input
				value={search}
				onChange={e => setSearch(e.target.value)}
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

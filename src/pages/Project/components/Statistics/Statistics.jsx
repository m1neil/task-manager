import styles from './Statistics.module.scss'

function Statistics() {
	return (
		<div className={styles.statistics}>
			<h2 className={`${styles['statistics-title']} title title-decor`}>
				Прогрес по завданням
			</h2>
			<div className={styles['statistics-list']}>
				<div className={styles['statistics-item']}>
					<div className={styles['statistics-top']}>
						<div className={styles['statistics-label']}>Текстова частина</div>
						<div className={styles['statistics-progress']}>3/8</div>
					</div>
					<div className={styles['statistics-line']}>
						<span></span>
					</div>
				</div>
				<div className={`${styles['statistics-item']} ${styles['--green']}`}>
					<div className={styles['statistics-top']}>
						<div className={styles['statistics-label']}>Ілюстрації</div>
						<div className={styles['statistics-progress']}>6/10</div>
					</div>
					<div className={styles['statistics-line']}>
						<span></span>
					</div>
				</div>
				<div className={`${styles['statistics-item']} ${styles['--orange']}`}>
					<div className={styles['statistics-top']}>
						<div className={styles['statistics-label']}>Інтерфейс</div>
						<div className={styles['statistics-progress']}>10/10</div>
					</div>
					<div className={styles['statistics-line']}>
						<span></span>
					</div>
				</div>
				<div className={`${styles['statistics-item']} ${styles['--red']}`}>
					<div className={styles['statistics-top']}>
						<div className={styles['statistics-label']}>Розробка</div>
						<div className={styles['statistics-progress']}>2/7</div>
					</div>
					<div className={styles['statistics-line']}>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Statistics

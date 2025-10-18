import styles from './Progress.module.scss'

function Progress() {
	return (
		<div className={styles.progress}>
			<h2 className={`${styles['progress-title']} title title-decor`}>
				Прогрес виконання
			</h2>
			<div className={styles['progress-circle']}>
				<div className={styles['progress-value']}>75%</div>
				<div className={styles['progress-label']}>для завершення завдання</div>
				<div className={styles['circle-bar']}></div>
			</div>
		</div>
	)
}

export default Progress

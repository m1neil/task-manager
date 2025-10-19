const months = [
	'січня',
	'лютого',
	'березня',
	'квітня',
	'травня',
	'червня',
	'липня',
	'серпня',
	'вересня',
	'жовтня',
	'листопада',
	'грудня',
]

export const getTransformDate = createdAt => {
	const date = new Date(createdAt)
	const day = date.getDate().toString().padStart(2, '0')
	const month = months[date.getMonth()]
	const year = date.getFullYear()
	return `${day} ${month} ${year}`
}

import { useState } from 'react'
import './CustomSelect.scss'

function CustomSelect({ options }) {
	const [currentValueId, setCurrentValueId] = useState(options[0].id)
	const [isOpenSelect, setIsOpenSelect] = useState(false)

	// useState(() => {
	// 	if (isOpenSelect) {

	// 	}

	// }, [isOpenSelect])

	const onHandleCurrentValue = ({ target }) => {
		setCurrentValueId(parseInt(target.getAttribute('data-value')))
		setIsOpenSelect(false)
	}

	const handleOpenSelect = () => {
		setIsOpenSelect(prevIsOpen => !prevIsOpen)
	}

	const currentValue = options.find(item => item.id === currentValueId)?.name

	return (
		<div className={`select ${isOpenSelect ? '--open' : ''}`}>
			<div className="select-wrapper">
				<button
					onClick={handleOpenSelect}
					type="button"
					className="select-button"
				>
					{currentValue}
				</button>
				<div className="select-options">
					{options.map(({ id, name }) => {
						const className =
							currentValueId === id ? 'select-value --checked' : 'select-value'
						return (
							<button
								className={className}
								type="button"
								key={id}
								data-value={id}
								onClick={onHandleCurrentValue}
							>
								{name}
							</button>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default CustomSelect

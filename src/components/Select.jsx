function Select({ onChange, options, data }) {
	return (
		<select
			className="form-select select"
			data-error-text="Виберіть свою роль"
			onChange={onChange}
			{...data}
		>
			<option className="select-option" value="" disabled>
				Ваша роль
			</option>
			{options.map(({ id, name }) => (
				<option key={id} className="select-option" value={id}>
					{name}
				</option>
			))}
		</select>
	)
}

export default Select

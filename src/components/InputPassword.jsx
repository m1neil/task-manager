import { useState } from 'react'
import iconShowPass from '@/assets/icons/show-pass.png'
import iconClosePass from '@/assets/icons/close-pass.png'

function InputPassword(props) {
	const [isShowPassword, setIsShowPassword] = useState(false)

	const handleShowPassword = () => {
		setIsShowPassword(prevIsShow => !prevIsShow)
	}

	return (
		<div className="form-password">
			<button
				onClick={handleShowPassword}
				type="button"
				className={`form-show-pass ${isShowPassword ? '--show' : ''}`.trim()}
			>
				<img src={iconShowPass} alt="icon open password" />
				<img src={iconClosePass} alt="icon close password" />
			</button>
			<input
				className="form-input input"
				{...props}
				type={isShowPassword ? 'text' : 'password'}
			/>
		</div>
	)
}

export default InputPassword

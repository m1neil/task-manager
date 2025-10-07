import { useGetAllSpecializationQuery } from '@/api/apiManager'
import CustomSelect from '@/components/CustomSelect/CustomSelect'
import frontRoutes from '@/router/frontRoutes'
import { Link } from 'react-router'

function Registration() {
	const {
		data: specialization,
		isLoading: isLoadingSpecialization,
		isErrorSpecialization,
	} = useGetAllSpecializationQuery()

	return (
		<section className="registration">
			<div className="registration-container">
				<h1 className="registration__title title">Реєстрація</h1>
				<div className="registration-text">
					Вже маєте обліковий запис?
					<Link to={frontRoutes.navigation.login}>Увійти</Link>
				</div>
				<form action="#" className="registration-form form">
					<div className="form-line">
						<label htmlFor="user-email" className="form-label">
							Адреса електронної пошти
						</label>
						<input
							type="email"
							id="user-email"
							name="user-email"
							required
							className="form-input"
						/>
					</div>
					<div className="form-line">
						<label htmlFor="password" className="form-label">
							Пароль
						</label>
						<input
							type="password"
							id="password"
							name="password"
							required
							className="form-input"
						/>
					</div>
					<div className="form-line">
						<label htmlFor="repeat-password" className="form-label">
							Повторіть пароль
						</label>
						<input
							type="password"
							id="repeat-password"
							name="repeat-password"
							required
							className="form-input"
						/>
					</div>
					<div className="form-line">
						<label htmlFor="user-name" className="form-label">
							Ім’я та прізвище
						</label>
						<input
							type="text"
							id="user-name"
							name="user-name"
							required
							className="form-input"
						/>
					</div>
					<div className="form-line">
						<label htmlFor="#" className="form-label">
							Роль
						</label>
						{specialization?.specializations && (
							<CustomSelect options={specialization?.specializations} />
						)}
					</div>
				</form>
			</div>
		</section>
	)
}

export default Registration

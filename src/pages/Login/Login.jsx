import React from 'react';
import styles from './Login.module.scss';
import store from '../../store/store';
import linksStore from '../../store/linksStore';
import CustomButton from '../../components/CustomButton/CustomButton';
import { apiPostAuthorize } from '../../api/api';
import { observer } from 'mobx-react-lite';

const Login = observer(() => {
	const { setAuthUser } = store;
	const { linkLogin } = linksStore;

	const loginApi = (email, password) => {
		apiPostAuthorize(linkLogin, { email, password }).then(({ data, error }) => {
			console.log(error);

			setAuthUser(data.role);
			localStorage.setItem('role', data.role);
			localStorage.setItem('token', data.token);
		})
	};
	
	return (
		<div className={styles.container}>
			<div className={styles.title}>Войти в аккаунт</div>

			<div className={styles.border} />

			<CustomButton 
				name="Пользователь" 
				handleClick={() => loginApi('user@user.ru', 'user')} 
			/>

			<CustomButton 
				name="Обходчик" 
				handleClick={() => loginApi('employee@employee.ru', 'employee')} 
				/>

			<CustomButton 
				name="Администратор" 
				handleClick={() => loginApi('admin@admin.ru', 'admin')} 
			/>

		</div>
	);
});

export default Login;




// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const loginApi = () => {
// 	apiPostAuthorize(linkLogin, { email, password }).then(({ data, error }) => {
// 		console.log(error);

// 		setAuthUser(data.role);
// 		localStorage.setItem('role', data.role);
// 		localStorage.setItem('token', data.token);
// 		// localStorage.setItem('role', data.role);
// 		// localStorage.setItem('token', data.token);
// 	});
// };



//Авторизация
{/* <div className={styles.input}>
	<CustomInput type="email" placeholder="email" value={email} onChange={(e) => setEmail(e)} />
	
	<CustomInput type="password" placeholder="пароль" value={password} onChange={(e) => setPassword(e)} />
</div>

<div style={{ width: '90%' }}>
	<CustomButton name="Войти" handleClick={loginApi} />
</div> */}
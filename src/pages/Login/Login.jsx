import React, { useState } from 'react';
import styles from './Login.module.scss';
import store from '../../store/store';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { loginAuth } from '../../api/api';

const Login = () => {
	const {setAuthUser} = store;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loginApi = () => {
		setAuthUser('admin');
		// loginAuth('', email, password).then((data) => {
		// 	try {
		// 		const {token, role} = data;

		// 		setAuthUser(role);
		// 		localStorage.setItem('token', token);
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// })
	};

	return (
		<div className={styles.container}>
			<div className={styles.title}>Войти в аккаунт</div>

			<div className={styles.border}/>

			<div className={styles.input}>
				<CustomInput 
					type="email"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e)}
				/>

				<CustomInput 
					type="password"
					placeholder="пароль"
					value={password}
					onChange={(e) => setPassword(e)}
				/>
			</div>

			<div style={{width:'90%'}}>
				<CustomButton name='Войти' handleClick={loginApi}/>
			</div>
		</div>
	);
};

export default Login;

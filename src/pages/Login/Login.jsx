import React, { useState } from 'react';
import styles from './Login.module.scss';
import store from '../../store/store';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const Login = () => {
	const {setAuthUser} = store;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loginApi = () => {
		// setAuthUser('employee');
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
					onChange={(e) => setEmail(e.target.value)}
				/>

				<CustomInput 
					type="password"
					placeholder="пароль"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<div style={{width:'80%'}}>
				<CustomButton name='Войти' handleClick={loginApi}/>
			</div>
		</div>
	);
};

export default Login;

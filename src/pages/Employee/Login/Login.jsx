import React, { useState } from 'react';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loginApi = () => {
		navigate('/employee');
	};

	return (
		<div className={styles.container}>
			<div className={styles.title}>Войти в аккаунт</div>

			<div className={styles.border}/>

			<div className={styles.input}>
				<input
					className={styles.inputItem}
					type="email"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					className={styles.inputItem}
					type="password"
					placeholder="пароль"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<div style={{width:'80%'}}>
				<button className={styles.btn} onClick={loginApi}>
					Войти
				</button>
			</div>
		</div>
	);
};

export default Login;

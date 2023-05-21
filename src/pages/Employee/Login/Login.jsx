import React, { useState } from 'react';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
// import Webcam from 'react-webcam';

const Login = () => {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');

	return (
		<div className={styles.container}>
			Авторизация

        <div className={styles.mainForm}>
            <input className={styles.inputItem} type='text' placeholder='Имя' value={name} onChange={setName}/>
            <input className={styles.inputItem} type='text' placeholder='Фамилия' value={lastName} onChange={setLastName}/>
            <input className={styles.inputItem} type='text' placeholder='Номер телефона' value={phone} onChange={setPhone}/>
        </div>

        <Link to='/employee'>Войти</Link>
		</div>
	);
};

export default Login;

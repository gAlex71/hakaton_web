import React, {useEffect} from 'react';
import styles from './Account.module.scss';
import CustomButton from '../../../components/CustomButton/CustomButton';
import store from '../../../store/store';
import ListCompleted from '../../../components/ListCompleted/ListCompleted';
import linksStore from '../../../store/linksStore';
import {apiGetUser} from '../../../api/api';

const Account = () => {
	const { setAuthUser } = store;
	const { linkGetUser } = linksStore;
	useEffect(() => {
		getInfoUser();
	}, []);

	const getInfoUser = () => {
		apiGetUser(linkGetUser).then(({ data, error }) => {
			console.log(data);
			console.log(error);
		});
	};

	const signOut = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('role');
		setAuthUser('');
	  };

	return (
		<div className={styles.container}>
			Иван Иванов
			
			<CustomButton name={'Выйти'} handleClick={signOut} />
		</div>
	);
};

export default Account;

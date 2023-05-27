import React, {useEffect} from 'react';
import styles from './Account.module.scss';
import CustomButton from '../../../components/CustomButton/CustomButton';
import store from '../../../store/store';
import ListCompleted from '../../../components/ListCompleted/ListCompleted';
import linksStore from '../../../store/linksStore';
import {apiGetUser} from '../../../api/api';

const Account = () => {
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

	return (
		<div className={styles.container}>
			Иван Иванов
			{/* Мои обходы

            <ListCompleted />

        <CustomButton name="Выйти" handleClick={goOutAcc}/> */}
		</div>
	);
};

export default Account;

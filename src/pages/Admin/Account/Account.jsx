import React, { useEffect } from 'react';
import { apiGetUser } from '../../../api/api';
import linksStore from '../../../store/linksStore';
import CustomButton from '../../../components/CustomButton/CustomButton';
import store from '../../../store/store';

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
		<div>
			Account
			<CustomButton name={'Выйти'} handleClick={signOut} />
		</div>
	);
};

export default Account;

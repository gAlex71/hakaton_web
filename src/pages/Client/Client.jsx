import React from 'react';
import styles from './Client.module.scss';
import { useNavigate } from 'react-router-dom';
import AllObjects from '../../components/AllObjects/AllObjects';

const Client = () => {
	const navigate = useNavigate();

	const selectObject = (id) => {
		navigate(`/client/${id}`);
	};

	return (
		<div className={styles.container}>
			Выберите ЖК:
			
			<AllObjects handleSelectObject={(id) => selectObject(id)}/>
		</div>
	);
};

export default Client;
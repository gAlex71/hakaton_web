import React, {useEffect} from 'react';
import styles from './InspectorMain.module.scss';
import { useNavigate } from 'react-router-dom';
import { apiGet } from '../../../api/api';
import AllObjects from '../../../components/AllObjects/AllObjects';

const InspectorMain = () => {
	const navigate = useNavigate();

	useEffect(() => {
		getObjects('');
	}, []);

	const getObjects = (url) => {
		apiGet(url).then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
	};

	const selectObject = (id) => {
		navigate(`/employee/${id}`);
	};

	return (
		<div className={styles.container}>            
			<div className={styles.title}>
				Выберите ЖК для обхода
			</div>

			<AllObjects handleSelectObject={(id) => selectObject(id)}/>
		</div>
	);
};

export default InspectorMain;

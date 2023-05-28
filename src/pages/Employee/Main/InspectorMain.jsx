import React, {useEffect} from 'react';
import styles from './InspectorMain.module.scss';
import { useNavigate } from 'react-router-dom';
import { apiGetProjects } from '../../../api/api';
import AllObjects from '../../../components/AllObjects/AllObjects';
import linksStore from '../../../store/linksStore';

const InspectorMain = () => {
	const { linkGetProjects} = linksStore;
	const navigate = useNavigate();

	useEffect(() => {
		getObjects(linkGetProjects);
	}, []);

	const getObjects = (url = '') => {
		apiGetProjects(url).then(({data, error}) => {
			console.log(data);
			console.log(error);
		})
	};

	const selectObject = (id) => {
		navigate(`/employee/${id}`);
	};

	return (
		<AllObjects title={'Выберите ЖК для обхода'} handleSelectObject={(id) => selectObject(id)}/>
	);
};

export default InspectorMain;

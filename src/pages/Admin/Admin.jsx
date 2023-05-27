import React, { useState } from 'react';
import styles from './Admin.module.scss';
import { useNavigate } from 'react-router-dom';
import ViewModal from '../../components/ViewModal/ViewModal';
import CreateObject from './CreateObject/CreateObject';
import CustomButton from '../../components/CustomButton/CustomButton';
import AllObjects from '../../components/AllObjects/AllObjects';

const Admin = () => {
	const navigate = useNavigate();
	const [isOpenModal, setOpenModal] = useState(false);

	const openCreateModal = () => {
		setOpenModal(true);
	};

	const closeCreateModal = () => {
		setOpenModal(false);
	};

	const selectObject = (id) => {
		navigate(`/admin/${id}`);
	};

	return (
		<div className={styles.container}>
			<AllObjects title={'Выберите ЖК для отслеживания прогресса'} handleSelectObject={(id) => selectObject(id)} />

			<div style={{marginLeft: '20px'}}>
				<CustomButton name="Добавить объект" handleClick={openCreateModal} />
			</div>

			<ViewModal title="Новый объект" isModal={isOpenModal} closeModal={closeCreateModal}>
				<CreateObject closeModal={closeCreateModal} />
			</ViewModal>
		</div>
	);
};

export default Admin;

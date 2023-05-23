import React, { useState } from 'react';
import styles from './Admin.module.scss';
import { useNavigate } from 'react-router-dom';
import ViewModal from '../../components/ViewModal/ViewModal';
import CreateObject from './CreateObject/CreateObject';
import CustomButton from '../../components/CustomButton/CustomButton';

const objectsRooms = [
	{ id: 1, name: 'Название ЖК1', houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
	{ id: 2, name: 'Название ЖК2', houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
	{ id: 3, name: 'Название ЖК3', houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
	{ id: 4, name: 'Название ЖК4', houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
];

const Admin = () => {
	const navigate = useNavigate();
	const [isOpenModal, setOpenModal] = useState(false);

	const openCreateModal = () => {
		setOpenModal(true);
	};

	const closeCreateModal = () => {
		setOpenModal(false);
	};

	return (
		<div className={styles.container}>
			Выберите ЖК для отслеживания прогресса:
			<div>
				{objectsRooms.map(({ id, name, houses }) => {
					return (
						<div key={id} onClick={() => navigate(`/admin/${id}`)}>
							<div>{name}</div>
						</div>
					);
				})}
			</div>
			
			<CustomButton name="Добавить объект" handleClick={openCreateModal} />

			<ViewModal title="Новый объект" isModal={isOpenModal} closeModal={closeCreateModal}>
				<CreateObject closeModal={closeCreateModal} />
			</ViewModal>
		</div>
	);
};

export default Admin;

import React, {useState} from 'react';
import styles from './ListFrames.module.scss';
import store from '../../../store/store';
import CreateFrame from './CreateFrame/CreateFrame';
import ViewModal from '../../../components/ViewModal/ViewModal';
import CustomButton from '../../../components/CustomButton/CustomButton';

const ListFrames = () => {
	const { frames, employees } = store;
    const [isOpenModal, setOpenModal] = useState(false);

	const openCreateModal = () => {
		setOpenModal(true);
	};

	const closeCreateModal = () => {
		setOpenModal(false);
	};

	return (
		<div className={styles.container}>
			Список корпусов по проекту
			{frames.map(({ id, name }) => {
				return <div key={id}>{name}</div>;
			})}

			<CustomButton name="Добавить корпус" handleClick={openCreateModal} />

			<ViewModal title="Новый корпус" isModal={isOpenModal} closeModal={closeCreateModal}>
				<CreateFrame closeModal={closeCreateModal} />
			</ViewModal>

			<div className={styles.blockInfo}>
				Обходчики на объекте
				{employees.map(({ id, name }) => {
					return <div key={id}>{name}</div>;
				})}
			</div>
		</div>
	);
};

export default ListFrames;

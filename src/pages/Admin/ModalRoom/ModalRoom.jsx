import React from 'react';
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './ModalRoom.module.scss';
import { Box } from '@mui/material';
import PieChart from '../../../components/PieChart/PieChart';

const ModalRoom = ({ title, isModal, closeModal, dataRoom, dataObjects }) => {
	return (
		<Modal open={isModal} onClose={closeModal} closeAfterTransition>
			<div className={styles.container}>
				<div className={styles.title}>
					{title}
					<CloseIcon style={{ cursor: 'pointer' }} onClick={closeModal} />
				</div>

				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div>Квартира номер {dataRoom.number}</div>
					<div>Подъезд 1</div>
					<div>Этаж 1</div>
					<h2>Готовность квартиры: {dataRoom.working}%</h2>

					<Box height="50vh" width="50vw">
						<PieChart data={dataObjects} />
					</Box>

					<div style={{display: 'flex'}}>
						{dataObjects.map((item) => (
							<div key={item.id} style={{ display: 'flex' }}>
								<div>{item.label}</div>
								<div>{item.value}%</div>
							</div>
						))}
					</div>

					<div>Дата: {dataRoom.date}</div>
				</div>
			</div>
		</Modal>
	);
};

export default ModalRoom;

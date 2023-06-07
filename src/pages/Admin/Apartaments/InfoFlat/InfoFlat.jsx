import React, { useEffect } from 'react';
import styles from './InfoFlat.module.scss';
import { Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate, useParams } from 'react-router-dom';
import { apiGetProjects } from '../../../../api/api';
import linksStore from '../../../../store/linksStore';
import { observer } from 'mobx-react-lite';
import store from '../../../../store/store';

const InfoFlat = observer(() => {
	const navigate = useNavigate();
	const { object, frame, section, flat } = useParams();
	const { linkGetRounds } = linksStore;
	const { numberFlat } = store;

	useEffect(() => {
		getRounds(`${linkGetRounds}${flat}/getchecks/`);
	}, []);

	const getRounds = (url = '') => {
		apiGetProjects(url).then(({ data, error }) => {
			console.log(data);
			// data.map(({ id, flat, date, analysis }) => {
			// 	setDataRoom({ id, number: flat, date, working: analysis.Ready_precentage, status: 'Готово' });

			// 	setDataObjects(
			// 		analysis.Detected_objects.map((item) => {
			// 			const { Frame_count, Name, Score } = item;

			// 			return {
			// 				id: Frame_count,
			// 				label: Name,
			// 				value: Score,
			// 				color: `hsl(2${Score}, 70%, 50%)`,
			// 			};
			// 		})
			// 	);
			// });
			console.log(error);
		});
	};

	return (
		<Box>
			<div className={styles.title}>
				<ArrowBackIosNewIcon
					sx={{ color: '#007bfb', cursor: 'pointer' }}
					onClick={() => navigate(`/admin/${object}/${frame}/${section}`)}
				/>
				Квартира № {numberFlat}
			</div>

			<div>Информация по последнему обходу</div>

			<div>Обходы</div>
		</Box>
	);
});

export default InfoFlat;

// import React, { useState, useEffect } from 'react';
// import { Modal } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import styles from './ModalRoom.module.scss';
// import { Box } from '@mui/material';
// import PieChart from '../../../components/PieChart/PieChart';
// import linksStore from '../../../store/linksStore';
// import { apiGetProjects } from '../../../api/api';

// const dataResult = [
// 	{
// 		id: 1,
// 		label: 'Готовность',
// 		value: 90 / 100,
// 		color: 'hsl(291, 70%, 50%)',
// 	},
// ];

// const columns = [
// 	{ field: 'frame', headerName: 'Подъезд', flex: 1 },
// 	{ field: 'floor', headerName: 'Этаж', flex: 1 },
// 	{ field: 'number', headerName: 'номер квартиры', flex: 1 },
// 	{ field: 'status', headerName: 'Статус', flex: 1 },
// ];

// const ModalRoom = ({ title, isModal, closeModal /*, dataRoom, dataObjects*/ }) => {
// 	const { linkGetRounds } = linksStore;
// 	const [dataRoom, setDataRoom] = useState({});
// 	const [dataObjects, setDataObjects] = useState([]);

// 	useEffect(() => {
// 		getRounds(linkGetRounds);
// 	}, []);

// 	const getRounds = (url = '') => {
// 		apiGetProjects(url).then(({ data, error }) => {
// 			console.log(data);
// 			data.map(({ id, flat, date, analysis }) => {
// 				setDataRoom({ id, number: flat, date, working: analysis.Ready_precentage, status: 'Готово' });

// 				setDataObjects(
// 					analysis.Detected_objects.map((item) => {
// 						const { Frame_count, Name, Score } = item;

// 						return {
// 							id: Frame_count,
// 							label: Name,
// 							value: Score,
// 							color: `hsl(2${Score}, 70%, 50%)`,
// 						};
// 					})
// 				);
// 			});
// 			console.log(error);
// 		});
// 	};

// 	return (
// 		<Modal open={isModal} onClose={closeModal} closeAfterTransition>
// 			<div className={styles.container}>
// 				<div className={styles.title}>
// 					{title}
// 					<CloseIcon style={{ cursor: 'pointer' }} onClick={closeModal} />
// 				</div>

// 				<div style={{ display: 'flex', flexDirection: 'column' }}>
// 					<div>Квартира номер {dataRoom.number}</div>
// 					<div>Подъезд 1</div>
// 					<div>Этаж 1</div>
// 					<h2>Готовность квартиры: {dataRoom.working}%</h2>

// 					<Box height="50vh" width="50vw">
// 						<PieChart data={dataObjects} />
// 					</Box>

// 					<div style={{ display: 'flex' }}>
// 						{dataObjects.map((item) => (
// 							<div key={item.id} style={{ display: 'flex' }}>
// 								<div>{item.label}</div>
// 								<div>{item.value}%</div>
// 							</div>
// 						))}
// 					</div>

// 					<div>Дата: {dataRoom.date}</div>
// 				</div>
// 			</div>
// 		</Modal>
// 	);
// };

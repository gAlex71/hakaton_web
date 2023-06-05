import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.scss';
import { Box } from '@mui/material';
import PieChart from '../../../components/PieChart/PieChart';
import ListCompleted from '../../../components/ListCompleted/ListCompleted';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ViewModal from '../../../components/ViewModal/ViewModal';
import linksStore from '../../../store/linksStore';
import { apiGetProjects } from '../../../api/api';
import { observer } from 'mobx-react-lite';
import store from '../../../store/store';
import ModalRoom from '../ModalRoom/ModalRoom';

const dataResult = [
	{
		id: 1,
		label: 'Готовность',
		value: 90 / 100,
		color: 'hsl(291, 70%, 50%)',
	},
	// {
	// 	id: 2,
	// 	label: 'Остаток работ',
	// 	value: 170,
	// 	color: 'hsl(162, 70%, 50%)',
	// },
	// {
	// 	id: 3,
	// 	label: 'Мусор',
	// 	value: 322,
	// 	color: 'hsl(104, 70%, 50%)',
	// },
];

const columns = [
	{ field: 'frame', headerName: 'Подъезд', flex: 1 },
	{ field: 'floor', headerName: 'Этаж', flex: 1 },
	{ field: 'number', headerName: 'номер квартиры', flex: 1 },
	{ field: 'status', headerName: 'Статус', flex: 1 },
];

const DashBoard = observer(() => {
	const { linkGetFlats, linkGetRounds } = linksStore;
	const { apartments, setApartments } = store;
	const { object, frame, section } = useParams();
	const navigate = useNavigate();

	const [isModal, setIsModal] = useState(false);
	const [selectItem, setSelectItem] = useState({});
	const [dataRoom, setDataRoom] = useState({});
	const [dataObjects, setDataObjects] = useState([]);

	useEffect(() => {
		getFlats(`${linkGetFlats}${section}/getflats/`);
		// getRounds(linkGetRounds);
	}, []);
console.log(apartments);
	// const getFlats = (url = '') => {
	// 	apiGetProjects(url).then(({ data, error }) => {
	// 		setApartments(
	// 			data.map(({ id, floor, number, section }) => {
	// 				return {
	// 					id,
	// 					frame: section,
	// 					floor,
	// 					number,
	// 					status: 'Готово',
	// 				};
	// 			})
	// 		);
	// 		// console.log(data);
	// 		// console.log(error);
	// 	});
	// };


	const getFlats = (url = '') => {
		apiGetProjects(url).then(({ data, error }) => {
			setApartments(
				data
					.reduce((acc, { floor, number }) => {
						const floorObj = acc.find((f) => f.floor === floor);
						if (!floorObj) {
							acc.push({ id: acc.length + 1, floor, apartaments: [`${number}`] });
						} else {
							floorObj.apartaments.push(`${number}`);
						}
						return acc;
					}, [])
					.map(({ id, floor, apartaments }) => ({ id, floor, apartaments }))
					.reverse()
			);
			console.log(error);
		});
	};

	// const getRounds = (url = '') => {
	// 	apiGetProjects(url).then(({ data, error }) => {
	// 		data.map(({ id, flat, date, analysis }) => {
	// 			setDataRoom({ id, number: flat, date, working: analysis.Ready_precentage, status: 'Готово' });
				
	// 			setDataObjects(analysis.Detected_objects.map((item) => {
	// 				const {Frame_count, Name, Score} = item;

	// 				return {
	// 					id: Frame_count,
	// 					label: Name,
	// 					value: Score,
	// 					color: `hsl(2${Score}, 70%, 50%)`
	// 				}
	// 			}));
	// 		});
	// 		console.log(error);
	// 	});
	// };

	// console.log(dataObjects);

	const handleTableItem = ({ row: { frame, floor, number, status } }) => {
		setIsModal(true);
		setSelectItem({ frame, floor, number, status });
	};

	return (
		<Box>
			{/* <div style={{ display: 'flex' }}>
				<Box height="50vh" width="50vw">
					<PieChart data={dataResult} />
				</Box>

				<div>Общая информация о секции</div>
			</div> */}

			<div className={styles.blockInfo}>
				<ArrowBackIosNewIcon
					sx={{ color: '#007bfb', cursor: 'pointer' }}
					onClick={() => navigate(`/admin/${object}/${frame}`)}
				/>
				Список квартир
				{/* <ListCompleted columns={columns} data={apartments} handleTableItem={handleTableItem} /> */}


				<div className={styles.list}>
				{apartments.map(({ floor, apartaments }) => {
					return (
						<div className={styles.floor} key={floor}>
							{floor}
							{apartaments.map((apartament) => {
								return (
									<div
										className={styles.apartament}
										key={apartament}
										onClick={handleTableItem}
									>
										{apartament}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>


			</div>

			<ModalRoom 
				title={'Готовность квартиры'} 
				isModal={isModal} 
				closeModal={() => setIsModal(false)}
				dataRoom={dataRoom}
				dataObjects={dataObjects}
			/>
				
		</Box>
	);
});

export default DashBoard;

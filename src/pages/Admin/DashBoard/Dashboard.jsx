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

const DashBoard = observer(() => {
	const { linkGetFlats } = linksStore;
	const { apartments, setApartments } = store;
	const { object, frame, section } = useParams();
	const navigate = useNavigate();

	const [isModal, setIsModal] = useState(false);
	const [selectItem, setSelectItem] = useState({});

	useEffect(() => {
		getFlats(`${linkGetFlats}${section}/getflats/`);
	}, []);

	const getFlats = (url = '') => {
		apiGetProjects(url).then(({ data, error }) => {
			setApartments(
				data
					.reduce((acc, { id, floor, number, checks }) => {
						const floorObj = acc.find((f) => f.floor === floor);
						if (!floorObj) {
							acc.push({ id: acc.length + 1, floor, apartaments: [{ id, number, checks }] });
						} else {
							floorObj.apartaments.push({ id, number, checks });
						}
						return acc;
					}, [])
					.map(({ id, floor, apartaments }) => ({ id, floor, apartaments }))
					.reverse()
			);
			console.log(error);
		});
	};

	const handleTableItem = ({ row: { frame, floor, number, status } }) => {
		setIsModal(true);
		setSelectItem({ frame, floor, number, status });
	};

	return (
		<Box>
			<div className={styles.blockInfo}>
				<ArrowBackIosNewIcon
					sx={{ color: '#007bfb', cursor: 'pointer' }}
					onClick={() => navigate(`/admin/${object}/${frame}`)}
				/>
				Список квартир

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
			/>
		</Box>
	);
});

export default DashBoard;

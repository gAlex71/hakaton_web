import React, { useEffect } from 'react';
import styles from './Apartaments.module.scss';
import { Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import linksStore from '../../../store/linksStore';
import { apiGetProjects } from '../../../api/api';
import { observer } from 'mobx-react-lite';
import store from '../../../store/store';

const DashBoard = observer(() => {
	const { linkGetFlats } = linksStore;
	const { apartments, setApartments } = store;
	const { object, frame, section } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getFlats(`${linkGetFlats}${section}/getflats/`);
	}, []);

	const getFlats = (url = '') => {
		apiGetProjects(url).then(({ data, error }) => {
			console.log(data);
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

	const handleTableItem = (id) => {
		navigate(`/admin/${object}/${frame}/${section}/${id}`);
	};

	console.log(apartments);

	return (
		<Box>
			<div className={styles.blockInfo}>
				<ArrowBackIosNewIcon
					sx={{ color: '#007bfb', cursor: 'pointer' }}
					onClick={() => navigate(`/admin/${object}/${frame}`)}
				/>
				Список квартир
				<div className={styles.list}>
					{apartments.map(({ id, floor, apartaments }) => {
						return (
							<div className={styles.floor} key={`${id}-${floor}`}>
								{floor}
								{apartaments.map(({ id, number }) => {
									return (
										<div
											className={styles.apartament}
											key={`${id}-${number}`}
											onClick={() => handleTableItem(id)}
										>
											{number}
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		</Box>
	);
});

export default DashBoard;

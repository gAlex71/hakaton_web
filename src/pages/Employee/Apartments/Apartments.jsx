import React, { useState } from 'react';
import styles from './Apartments.module.scss';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const objects = [
	{ floor: 1, apartaments: ['2', '1', '3', '2', '3'] },
	{ floor: 2, apartaments: ['2', '1', '3', '2', '4'] },
	{ floor: 3, apartaments: ['2', '1', '3', '2', '3'] },
	{ floor: 4, apartaments: ['2', '1', '3', '2', '3'] },
	{ floor: 5, apartaments: ['2', '1', '3', '2', '3'] },
	{ floor: 6, apartaments: ['2', '1', '3', '2', '2'] },
	{ floor: 7, apartaments: ['2', '1', '3', '2', '3'] },
	{ floor: 8, apartaments: ['2', '1', '3', '2', '3'] },
	{ floor: 9, apartaments: ['2', '1', '3', '2', '4'] },
];

const Apartments = () => {
	const navigate = useNavigate();
	const {object, frame} = useParams();
	const [floors, setFloors] = useState(objects.reverse());

	const lastPath = `/employee/${object}`;

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<ArrowBackIosNewIcon sx={{ color: '#007bfb', cursor: 'pointer' }} onClick={() => navigate('/employee')} />
				Выберите квартиру для обхода
			</div>

			<div className={styles.list}>
				{floors.map(({ floor, apartaments }) => {
					return (
						<div className={styles.floor} key={floor}>
							{floor}
							{apartaments.map((apartament) => {
								return (
									<div 
										className={styles.apartament} 
										key={apartament} 
										onClick={() => navigate(`/employee/${object}/${frame}/${apartament}/camera`)}
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
	);
};

export default Apartments;

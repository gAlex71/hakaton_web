import React, { useEffect } from 'react';
import store from '../../../store/store';
import linksStore from '../../../store/linksStore';
import { observer } from 'mobx-react-lite';
import { apiGetProjects } from '../../../api/api';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box } from '@mui/material';
import styles from './Sections.module.scss';

const Sections = observer(() => {
	const { linkGetSections } = linksStore;
	const { sections, setSections } = store;
	const { object, frame } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getSections(`${linkGetSections}${frame}/getsections/`);
	}, []);

	const getSections = (url = '') => {
		apiGetProjects(url).then(({ data, error }) => {
			setSections(
				data.map(({ building, flats_on_floor, floors_total, number, samolet_pk }) => {
					return {
						id: samolet_pk,
						name: number,
						floors: floors_total,
						flats: flats_on_floor,
						frame: building,
					};
				})
			);
			// console.log(data);
			console.log(error);
		});
	};

	return (
		<Box>
			<div className={styles.title}>
				<ArrowBackIosNewIcon
					sx={{ color: '#007bfb', cursor: 'pointer' }}
					onClick={() => navigate(`/employee/${object}`)}
				/>
				Выберите секцию
			</div>

			<div className={styles.frames}>
				{sections.map(({ id, name, floors, flats, frame }) => {
					return (
						<div
							key={id}
							className={styles.frame}
							onClick={() => navigate(`/employee/${object}/${frame}/${id}`)}
						>
							<div>Секция {name}</div>
							<div>Этажей: {floors}</div>
							<div>Квартир на этаже: {flats}</div>
						</div>
					);
				})}
			</div>
		</Box>
	);
});

export default Sections;

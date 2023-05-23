import React, {useEffect} from 'react';
import styles from './InspectorMain.module.scss';
import a from '../../../assets/a.jpg';
import b from '../../../assets/b.jpg';
import c from '../../../assets/c.jpg';
import e from '../../../assets/e.jpg';
import { useNavigate } from 'react-router-dom';
import { apiGet } from '../../../api/api';

const objectsRooms = [
	{ id: 1, name: 'Квартал Строгино', photo: a, houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
	{ id: 2, name: 'Квартал Ивакино', photo: b, houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
	{ id: 3, name: 'Квартал Марьино', photo: c, houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
	{ id: 4, name: 'Квартал Сабурово', photo: e, houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
];

const InspectorMain = () => {
	const navigate = useNavigate();

	useEffect(() => {
		getObjects('');
	}, []);

	const getObjects = (url) => {
		apiGet(url).then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
	};

	function getLocation() {
		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(showPosition);
		} else {
		  console.log("Geolocation is not supported by this browser.");
		}
	  }
	  
	  function showPosition(position) {
		console.log(position);
		console.log("Latitude: " + position.coords.latitude +
		"<br>Longitude: " + position.coords.longitude);
	  }

	getLocation();

	return (
		<div className={styles.container}>            
			<div className={styles.title}>
				Выберите ЖК для обхода
			</div>

			<div className={styles.cards} >
				{objectsRooms.map(({ id, name, photo, houses }) => {
					return (
						<div key={id} className={styles.card} onClick={() => navigate(`/employee/${id}`)}>
							<img className={styles.photo} src={photo} alt=''/>

							<div>{name}</div>
							{/* {houses.map((house) => {
								return <div>{house}</div>;
							})} */}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default InspectorMain;

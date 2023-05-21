import React from 'react';
import styles from './Admin.module.scss';
import { Link } from 'react-router-dom';

const objectsRooms = [
	{ id: 1, name: 'Название ЖК1', houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
	{ id: 2, name: 'Название ЖК2', houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
	{ id: 3, name: 'Название ЖК3', houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
	{ id: 4, name: 'Название ЖК4', houses: ['Дом 1', 'Дом 2', 'Дом 3', 'Дом 4', 'Дом 5'] },
];

const Admin = () => {
	return (
		<div className={styles.container}>
			<Link to="/">Назад</Link>

			Выберите ЖК для отслеживания прогресса:

			<div>
				{objectsRooms.map(({ id, name, houses }) => {
					return (
						<div key={id}>
							<div>{name}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Admin;

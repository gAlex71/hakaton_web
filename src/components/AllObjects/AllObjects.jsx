import styles from './AllObjects.module.scss';
import store from '../../store/store';
import { useEffect, useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';

const AllObjects = ({ title, openCreateModal = () => {}, handleSelectObject = () => {} }) => {
	const { allObjects, authUser } = store;
	const [visibleObj, setVisibleObj] = useState(allObjects);
	const [search, setSearch] = useState('');

	useEffect(() => {
		if(!!search.length){
			setVisibleObj(allObjects);
		}
		
		setTimeout(() => {
			filterObjects();
		}, 1000);
	}, [search]);

	const filterObjects = () => {
		const filteredObj = visibleObj.filter(({ name }) => {
			return name.toLowerCase().includes(search.toLowerCase());
		});
		setVisibleObj(filteredObj);
	};

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				{authUser === 'admin' && <CustomButton name="+ Добавить объект" handleClick={openCreateModal} />}

				{title}

				<input
					className={styles.inputItem}
					placeholder="Поиск..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<div className={styles.cards}>
				{visibleObj.map(({ id, name, photo, houses }) => {
					return (
						<div key={id} className={styles.card} onClick={() => handleSelectObject(id)}>
							<img className={styles.photo} src={photo} alt="" />

							<div className={styles.name}>{name}</div>
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

export default AllObjects;

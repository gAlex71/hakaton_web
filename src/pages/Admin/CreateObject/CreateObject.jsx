import React, { useState } from 'react';
import styles from './CreateObject.module.scss';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton';

const CreateObject = ({ closeModal }) => {
	const [name, setName] = useState('');
	const [coords, setCoords] = useState('');
	const [adress, setAdress] = useState('');
	const [date, setDate] = useState('');

	const createNewObject = () => {
		console.log('Создать');
		closeModal();
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<CustomInput type="text" placeholder="Название" value={name} onChange={(e) => setName(e.target.value)} />

			<CustomInput type="text" placeholder="Координаты" value={coords} onChange={(e) => setCoords(e.target.value)} />

			<CustomInput type="text" placeholder="Адрес" value={adress} onChange={(e) => setAdress(e.target.value)} />

			<CustomInput type="date" placeholder="Дата" value={date} onChange={(e) => setDate(e.target.value)} />

      <CustomButton name='Создать' handleClick={createNewObject}/>
		</div>
	);
};

export default CreateObject;

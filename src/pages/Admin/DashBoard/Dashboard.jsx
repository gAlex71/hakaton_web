import React, {useState} from 'react';
import styles from './Dashboard.module.scss';
import { Box } from '@mui/material';
import PieChart from '../../../components/PieChart/PieChart';
import ListCompleted from '../../../components/ListCompleted/ListCompleted';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ViewModal from '../../../components/ViewModal/ViewModal';

const dataResult = [
	{
		id: 1,
		label: 'Готовность',
		value: 239,
		color: 'hsl(291, 70%, 50%)',
	},
	{
		id: 2,
		label: 'Остаток работ',
		value: 170,
		color: 'hsl(162, 70%, 50%)',
	},
	{
		id: 3,
		label: 'Мусор',
		value: 322,
		color: 'hsl(104, 70%, 50%)',
	},
];

const columns = [
	{ field: 'frame', headerName: 'Подъезд', flex: 1 },
	{ field: 'floor', headerName: 'Этаж', flex: 1 },
	{ field: 'number', headerName: 'номер квартиры', flex: 1 },
	{ field: 'status', headerName: 'Статус', flex: 1 },
];

const data = [
	{ id: 1, frame: 1, floor: 1, number: 1, status: 'Готово' },
	{ id: 2, frame: 1, floor: 1, number: 2, status: 'Коммуникации' },
	{ id: 3, frame: 1, floor: 1, number: 3, status: 'Уборка' },
	{ id: 4, frame: 1, floor: 1, number: 4, status: 'Уборка' },
	{ id: 5, frame: 1, floor: 1, number: 5, status: 'Коммуникации' },
	{ id: 6, frame: 1, floor: 2, number: 6, status: 'Готово' },
	{ id: 7, frame: 1, floor: 2, number: 7, status: 'Коммуникации' },
	{ id: 8, frame: 1, floor: 2, number: 8, status: 'Уборка' },
	{ id: 9, frame: 1, floor: 2, number: 9, status: 'Уборка' },
	{ id: 10, frame: 1, floor: 2, number: 10, status: 'Коммуникации' },
];

const DashBoard = () => {
	const { object } = useParams();
	const navigate = useNavigate();

	const [isModal, setIsModal] = useState(false);
	const [selectItem, setSelectItem] = useState({});

	const handleTableItem = ({ row: { frame, floor, number, status } }) => {
		setIsModal(true);
		setSelectItem({ frame, floor, number, status });
	};

	return (
		<Box>
			<ArrowBackIosNewIcon
				sx={{ color: '#007bfb', cursor: 'pointer' }}
				onClick={() => navigate(`/admin/${object}`)}
			/>

			<div style={{display: 'flex'}}>
				<Box height="50vh" width="50vw">
					<PieChart data={dataResult} />
				</Box>

				<div>Общая информация о корпусе</div>
			</div>

			<div className={styles.blockInfo}>
				Список квартир
				<ListCompleted 
					columns={columns} 
					data={data} 
					handleTableItem={handleTableItem}
				/>
			</div>

			<ViewModal
				title={'Готовность квартиры'}
				isModal={isModal}
				closeModal={() => setIsModal(false)}
			>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					<div>Квартира номер {selectItem.number}</div>
					<div>Подъезд {selectItem.frame}</div>
					<div>Этаж {selectItem.floor}</div>
					<div>Готовность квартиры: {selectItem.status}</div>
				</div>
			</ViewModal>
		</Box>
	);
};

export default DashBoard;

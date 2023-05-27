import styles from './Dashboard.module.scss';
import { Box } from '@mui/material';
import PieChart from '../../../components/PieChart/PieChart';
import ListCompleted from '../../../components/ListCompleted/ListCompleted';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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
	{ field: 'date', headerName: 'Дата', flex: 1 },
	{ field: 'name', headerName: 'Название', flex: 1 },
	{ field: 'entrance', headerName: 'Подъезд', flex: 1 },
	{ field: 'floor', headerName: 'Этаж', flex: 1 },
];

const data = [
	{ id: 1, date: '28.05.23', name: 'Уборка', entrance: 1, floor: 10 },
	{ id: 2, date: '28.05.23', name: 'Установка дверей', entrance: 3, floor: 15 },
	{ id: 3, date: '28.05.23', name: 'Продажа', entrance: 18, floor: 5 },
	{ id: 4, date: '28.05.23', name: 'Уборка', entrance: 3, floor: 10 },
	{ id: 5, date: '28.05.23', name: 'Уборка', entrance: 6, floor: 10 },
];

const DashBoard = () => {
	const { object } = useParams();
	const navigate = useNavigate();

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

				<div>Информация о корпусе</div>
			</div>

			<div className={styles.blockInfo}>
				Список последних действий в корпусе
				<ListCompleted columns={columns} data={data} />
			</div>
		</Box>
	);
};

export default DashBoard;

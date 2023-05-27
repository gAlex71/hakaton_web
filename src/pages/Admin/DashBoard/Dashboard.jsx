// import styles from './DashBoard.module.scss';
import { Box } from '@mui/material';
import PieChart from '../../../components/PieChart/PieChart';
import ListCompleted from '../../../components/ListCompleted/ListCompleted';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const DashBoard = () => {
	const {object} = useParams();
	const navigate = useNavigate();

	return (
		<Box>
			<ArrowBackIosNewIcon sx={{ color: '#007bfb', cursor: 'pointer' }} onClick={() => navigate(`/admin/${object}`)} />

			<Box height='50vh'>
				<PieChart />
			</Box>

			{/* <ListCompleted /> */}
		</Box>
	);
};

export default DashBoard;

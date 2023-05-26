// import styles from './DashBoard.module.scss';
import { Box } from '@mui/material';
import PieChart from '../../../components/PieChart/PieChart';
import ListCompleted from '../../../components/ListCompleted/ListCompleted';

const DashBoard = () => {
	return (
		<Box>
			<Box height='50vh'>
				<PieChart />
			</Box>

			<ListCompleted />
		</Box>
	);
};

export default DashBoard;

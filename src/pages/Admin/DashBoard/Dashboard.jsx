// import styles from './DashBoard.module.scss';
import { Box } from "@mui/material";
import PieChart from '../../../components/PieChart/PieChart';
import ListCompleted from '../ListCompleted/ListCompleted';

const DashBoard = () => {
    return (
        <Box>
            <PieChart />

            <ListCompleted />
        </Box>
    );
};

export default DashBoard;
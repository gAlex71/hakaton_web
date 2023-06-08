import React, { useEffect, useState } from 'react';
import styles from './InfoFlat.module.scss';
import { Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate, useParams } from 'react-router-dom';
import { apiGetProjects } from '../../../../api/api';
import linksStore from '../../../../store/linksStore';
import { observer } from 'mobx-react-lite';
import store from '../../../../store/store';
import ListCompleted from '../../../../components/ListCompleted/ListCompleted';
import PieChart from '../../../../components/PieChart/PieChart';
import ViewModal from '../../../../components/ViewModal/ViewModal';

const columns = [
	{ field: 'id', headerName: 'Номер обхода', flex: 1 },
	{ field: 'date', headerName: 'Дата обхода', flex: 1 },
];

const InfoFlat = observer(() => {
	const navigate = useNavigate();
	const { object, frame, section, flat } = useParams();
	const { linkGetRounds } = linksStore;
	const { numberFlat } = store;

	const [rounds, setRounds] = useState([]);
	const [infoRound, setInfoRound] = useState({});
	const [dataPie, setDataPie] = useState([]);
	const [isOpenModal, setOpenModal] = useState(false);

	useEffect(() => {
		getRounds(`${linkGetRounds}${flat}/getchecks/`);
	}, []);

	useEffect(() => {
		if(!Object.keys(infoRound).length) return;

		setDataPie(infoRound.Detected_objects.map((item) => {
				const { Frame_count, Name, Score } = item;

				return {
					id: `${Score} (кадров: ${Frame_count})`,
					label: Name,
					value: Score,
					color: `hsl(2${Score}, 70%, 50%)`,
				};
			})
		);
	}, [infoRound]);

	const getRounds = (url = '') => {
		apiGetProjects(url).then(({ data, error }) => {
			setRounds(data);

			console.log(error);
		});
	};

	const getInfoRound = ({ row }) => {
		if(!Object.keys(row.analysis).length) {
			alert('Данных не обнаружено');
			return;
		}
		console.log(rounds);
		setInfoRound(row.analysis);
		setOpenModal(true);
	};

	const closeCreateModal = () => {
		setOpenModal(false);
	};

	return (
		<Box>
			<div className={styles.title}>
				<ArrowBackIosNewIcon
					sx={{ color: '#007bfb', cursor: 'pointer' }}
					onClick={() => navigate(`/admin/${object}/${frame}/${section}`)}
				/>
				Квартира № {numberFlat}
			</div>

			<div style={{ maxWidth: '500px', marginTop: '40px' }}>
				<div className={styles.tableTitle}>Выберите обход для подробной информации</div>

				<ListCompleted columns={columns} data={rounds} handleTableItem={getInfoRound} />
			</div>

			<ViewModal title={`Общая готовность квартиры: ${infoRound.Ready_precentage}%`} isModal={isOpenModal} closeModal={closeCreateModal}>
				<div>
					<div>Готовность потолка: 
						{infoRound.Ceiling_ready ? <span>&#x2714;</span> : <span>&#x2716;</span>}
					</div>
					<div>Готовность дверей: 
						{infoRound.Door_ready ? <span>&#x2714;</span> : <span>&#x2716;</span>}
					</div>

					<Box height="50vh" width="50vw">
						<PieChart data={dataPie} />
					</Box>
				</div>
			</ViewModal>
		</Box>
	);
});

export default InfoFlat;
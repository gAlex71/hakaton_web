import React, { useState } from 'react';
import styles from './CameraPage.module.scss';
import ViewModal from '../../../components/ViewModal/ViewModal';
import Instruction from '../Instruction/Instruction';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { observer } from 'mobx-react-lite';
import { apiPostFile } from '../../../api/employeeApi/employeeApi';
import linksStore from '../../../store/linksStore';
import store from '../../../store/store';

const CameraPage = observer(() => {
	const { linkCreateVideo } = linksStore;
	const { numberFlat } = store;
	const { object, frame, section, apartament } = useParams();
	const navigate = useNavigate();
	const [isOpenModal, setOpenModal] = useState(true);
	const [videoFile, setVideoFile] = useState({});
	const [isLoad, setLoad] = useState(false);
	const [video, setVideo] = useState('');

	const pathLast = `/employee/${object}/${frame}/${section}`;

	const fileUploadHandler = (event) => {
		event.preventDefault();
		event.stopPropagation();
		//Получаем все файлы из инпута
		const newFiles = event.target.files;
		console.log(newFiles);
		setVideoFile(newFiles[0]);
	};

	const closeModalInstructions = () => {
		setOpenModal(false);
	};

	const sendVideo = () => {
		setLoad(true);

		apiPostFile(linkCreateVideo, videoFile, parseInt(apartament)).then(({ data, error }) => {
			setLoad(false);
			setVideo(data.video);

			console.log(data);
			console.log(error);
		});
	};

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<ArrowBackIosNewIcon sx={{ color: '#007bfb', cursor: 'pointer' }} onClick={() => navigate(pathLast)} />
				Квартира № {numberFlat}
			</div>

			<div>
				Загрузка данных о квартире
				<div className={styles.disk}>
					<div className={styles.disk_btns}>
						<div className="disk_upload">
							<label htmlFor="disk_upload-input" className={styles.diskUpload}>
								Загрузить файл
							</label>
							<input
								multiple={true}
								onChange={(event) => fileUploadHandler(event)}
								type="file"
								id="disk_upload-input"
								className={styles.diskInput}
							/>
						</div>
					</div>
				</div>
				<CustomButton name={'Отправить видео'} handleClick={sendVideo} />
				{isLoad && <div>Загрузка файлов на сервер, подождите...</div>}
			</div>

			{video && <video className={styles.backVideo} src={video} controls={true} />}

			<ViewModal title="Следуйте инструкции" isModal={isOpenModal} closeModal={closeModalInstructions}>
				<Instruction closeModal={closeModalInstructions} />
			</ViewModal>
		</div>
	);
});

export default CameraPage;

import React, { useState } from 'react';
import styles from './CameraPage.module.scss';
import ViewModal from '../../../components/ViewModal/ViewModal';
import Instruction from '../Instruction/Instruction';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import store from '../../../store/store';
import { observer } from 'mobx-react-lite';
import Uploader from './Uploader/Uploader';
import { apiPostFile } from '../../../api/employeeApi/employeeApi';
import linksStore from '../../../store/linksStore';

const CameraPage = observer(() => {
	const {files, setFiles} = store;
	const {linkCreateVideo} = linksStore;
	const { object, frame, section, apartament } = useParams();
	const navigate = useNavigate();
	const [isOpenModal, setOpenModal] = useState(true);
	const [dragEnter, setDragEnter] = useState(false);
	const [videoFile, setVideoFile] = useState({});
	const [isLoad, setLoad] = useState(false);

	const pathLast = `/employee/${object}/${frame}/${section}`;

	//Получаем перенесенные в область файлы
    const dropHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        const newFiles = event.target.files
		setVideoFile(newFiles[0]);
        //Для каждого из файла вызовем функцию загрузки
        setDragEnter(false)
    }

	const fileUploadHandler = (event) => {
		event.preventDefault()
        event.stopPropagation()
		//Получаем все файлы из инпута
		const newFiles = event.target.files
		setVideoFile(newFiles[0]);
	};

	const dragEnterHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

	const closeModalInstructions = () => {
		setOpenModal(false);
	};

	const dragLeaveHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

	const sendVideo = () => {
		setLoad(true);

		// const resultData ={
		// 	id: 1,
		// 	date: Date.now(),
		// 	analysis: [],
		// 	is_analysed: false,
		// 	flat: parseInt(apartament) 
		// }
		apiPostFile(linkCreateVideo, videoFile, parseInt(apartament)).then(({data, error}) => {
			setLoad(false);

			console.log(data);
			console.log(error);
		})

		console.log('ЖК', object);
		console.log('Дом', frame);
		console.log('Квартира', apartament);
	};

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<ArrowBackIosNewIcon sx={{ color: '#007bfb', cursor: 'pointer' }} onClick={() => navigate(pathLast)} />
				Загрузка данных о квартире
			</div>

			{!dragEnter ? (
				<div className={styles.disk} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
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
			) : (
				<div
					className={styles.dropArea}
					onDrop={dropHandler}
					onDragEnter={dragEnterHandler}
					onDragLeave={dragLeaveHandler}
					onDragOver={dragEnterHandler}
				>
					Перетащите файлы сюда
				</div>
			)}

			{isLoad && <div>Загрузка файлов на сервер, подождите...</div>}

			<CustomButton name={'Отправить видео'} handleClick={sendVideo}/>

			<ViewModal
				title="Следуйте инструкцям по обходу квартир"
				isModal={isOpenModal}
				closeModal={closeModalInstructions}
			>
				<Instruction closeModal={closeModalInstructions} />
			</ViewModal>
		</div>
	);
});

export default CameraPage;

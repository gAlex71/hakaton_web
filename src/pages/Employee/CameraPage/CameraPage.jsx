import React, { useState } from 'react';
import styles from './CameraPage.module.scss';
import ViewModal from '../../../components/ViewModal/ViewModal';
import Instruction from '../Instruction/Instruction';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { useParams, Link } from 'react-router-dom';

const CameraPage = () => {
	const { object, frame, apartament } = useParams();
	const [isOpenModal, setOpenModal] = useState(true);
	const [dragEnter, setDragEnter] = useState(false);

	const pathLast = `/employee/${object}/${frame}`;

	//Получаем перенесенные в область файлы
    const dropHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        console.log(files);
        //Для каждого из файла вызовем функцию загрузки
        // files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }

	const fileUploadHandler = (event) => {
		//Получаем все файлы из инпута
		const files = [...event.target.files];
		console.log(files);
		//Для каждого из файла вызовем функцию загрузки
		// files.forEach((file) => dispatch(uploadFile(file, currentDir)));
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
		console.log('ЖК', object);
		console.log('Дом', frame);
		console.log('Квартира', apartament);
	};

	return (
		<div className={styles.container}>
			{!dragEnter ? (
				<div className={styles.disk} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
					<Link to={pathLast}>Вернуться к списку квартир</Link>

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

			<ViewModal
				title="Следуйте инструкцям по обходу квартир"
				isModal={isOpenModal}
				closeModal={closeModalInstructions}
			>
				<Instruction closeModal={closeModalInstructions} />
			</ViewModal>
		</div>
	);
};

export default CameraPage;

import React, {useState} from 'react';
import styles from './CameraPage.module.scss';
import ViewModal from '../../../components/ViewModal/ViewModal';
import Instruction from '../Instruction/Instruction';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { useParams, Link } from 'react-router-dom';

const CameraPage = () => {
	const {object, frame, apartament} = useParams();
	const [isOpenModal, setOpenModal] = useState(true);

	const pathLast = `/employee/${object}/${frame}`

	const closeModalInstructions = () => {
		setOpenModal(false);
	};

	const sendVideo = () => {
		console.log('ЖК', object);
		console.log('Дом', frame);
		console.log('Квартира', apartament);
	};

	return (
		<div className={styles.container}>
			<Link to={pathLast}>Вернуться к списку квартир</Link>
			<div>Загрузите видео обхода квартиры</div>

			<CustomButton name="Отправить видео" handleClick={sendVideo} />

			<Link>Перейти к следующей квартире</Link>

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

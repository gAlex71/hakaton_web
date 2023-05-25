import React, {useState, useEffect} from 'react';
import styles from './CameraPage.module.scss';
import ViewModal from '../../../components/ViewModal/ViewModal';
import Instruction from '../Instruction/Instruction';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { useParams, Link } from 'react-router-dom';

const CameraPage = () => {
	const [pressure, setPressure] = useState(null);
  const [altitude, setAltitude] = useState(null);

  useEffect(() => {
    if ('Barometer' in window) {
      const barometer = new Barometer({ frequency: 1 });

      barometer.addEventListener('reading', () => {
        setPressure(barometer.pressure);
        setAltitude(calculateAltitude());
      });

      barometer.start();

      return () => {
        barometer.stop();
      };
    }
  }, []);

  const calculateAltitude = () => {
    const seaLevelPressure = 1013.25; // Среднее атмосферное давление на уровне моря
    const pressureDiff = seaLevelPressure - pressure;
    return pressureDiff / 12.0; // Приблизительный расчет высоты
  }

  return (
    <div>
      {altitude ? `Высота: ${altitude.toFixed(2)} м` : 'Барометр недоступен'}
    </div>
  );
	// const {object, frame, apartament} = useParams();
	// const [isOpenModal, setOpenModal] = useState(true);

	// const pathLast = `/employee/${object}/${frame}`

	// const closeModalInstructions = () => {
	// 	setOpenModal(false);
	// };

	// const sendVideo = () => {
	// 	console.log('ЖК', object);
	// 	console.log('Дом', frame);
	// 	console.log('Квартира', apartament);
	// };

	// return (
	// 	<div className={styles.container}>
	// 		<Link to={pathLast}>Вернуться к списку квартир</Link>
	// 		<div>Загрузите видео обхода квартиры</div>

	// 		<CustomButton name="Отправить видео" handleClick={sendVideo} />

	// 		<Link>Перейти к следующей квартире</Link>

	// 		<ViewModal
	// 			title="Следуйте инструкцям по обходу квартир"
	// 			isModal={isOpenModal}
	// 			closeModal={closeModalInstructions}
	// 		>
	// 			<Instruction closeModal={closeModalInstructions} />
	// 		</ViewModal>
	// 	</div>
	// );
};

export default CameraPage;

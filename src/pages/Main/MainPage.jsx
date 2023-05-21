import styles from './MainPage.module.scss';
import { Link } from 'react-router-dom';

const MainPage = () => {
	return (
		<div className={styles.container}>
			<div style={{fontSize: '20px', fontWeight: 'bold', margin: '20px'}}>Сервис анализа готовности квартир</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Link to='/employee/login'>Обходчик</Link>
				<Link to='/admin'>Администратор</Link>
				<div>Клиент</div>
			</div>
		</div>
	);
};

export default MainPage;

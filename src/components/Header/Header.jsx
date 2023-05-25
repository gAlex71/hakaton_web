import styles from './Header.module.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import store from '../../store/store';

const Header = observer(() => {
	const { authUser } = store;
	const navigate = useNavigate();

	const handleNavigate = () => {
		const pages = {
			'': '/sigin',
			'employee': '/employee',
			'admin': '/admin',
			'client': '/sigin',
		};

		navigate(pages[authUser]);
	};

	return (
		<div className={styles.container}>
			<img className={styles.logo} src={logo} onClick={handleNavigate} />

			{authUser && (
				<div className={styles.account} onClick={() => navigate('/employee/account')}>
					<PersonOutlineIcon />
					Аккаунт
				</div>
			)}
		</div>
	);
});

export default Header;

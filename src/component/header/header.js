import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';
import styles from './header.module.css';
import { Logo } from './logo/logo';
import { ROLE } from '../../constants';
import { selectUserLogin, selectUserRole, selectUserSession } from '../../selectors';
import { logout } from '../../actions';

export const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);
	// const user = useSelector(selectUser)

	console.log(roleId);

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	return (
		<header className={styles.header}>
			<div className={styles.hederContent}>
				<Logo />
				<div>
					{roleId === ROLE.VIEWER ? (
						<>
							<div className={styles.signInUpButtons}>
								<Link to="/login">
									<Button> Войти </Button>
								</Link>
								<Link to="/register">
									<Button> Регистрация</Button>
								</Link>
							</div>
						</>
					) : (
						<>
							<div className={styles.userControlConteiner}>
								<div
									onClick={() => navigate(-1)}
									className={styles.buttomIcon}
								>
									<Icon id="fa-backward" />
								</div>
								<Link to="/myBooking">
									<Icon id="fa-heart-o" />
								</Link>
								<Link to="/bookings">
									<Icon id="fa-list-ol" />
								</Link>
								<div>
									<Icon id="fa-user-circle" />
									{login}
								</div>
								<div onClick={onLogout} className={styles.buttomIcon}>
									<Icon id="fa-sign-out" />
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

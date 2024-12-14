import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';
import styles from './header.module.css';
import { Logo } from './logo/logo';

export const Header = () => {
	const navigate = useNavigate();
	return (
		<header className={styles.header}>
			<div className={styles.hederContent}>
				<Logo />
				<div className={styles.registration}>
					<div>
						<Link to="/login">
							<Button> Войти </Button>
						</Link>
						<Link to="/register">
							<Button> Регистрация</Button>
						</Link>
					</div>
					<div>
						<Link to="/myBooking">
							<Icon id="fa-heart-o" />
						</Link>
						<div onClick={() => navigate(-1)}>
							<Icon id="fa-backward" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

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
				<div>
					<div>
						<Link to="/login">
							<Button> Войти </Button>
						</Link>
						<Link to="/register">
							<Button> Регистрация</Button>
						</Link>
					</div>
					<div className={styles.icons}>
						<Link to="/myBooking">
							<Icon id="fa-heart-o" />
						</Link>
						<div onClick={() => navigate(-1)} className={styles.iconGoBack}>
							<Icon id="fa-backward" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

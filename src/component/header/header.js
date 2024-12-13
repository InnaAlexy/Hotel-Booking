import { Button } from '../button/button';
import { Icon } from '../icon/icon';
import styles from './header.module.css';
import { Logo } from './logo/logo';

export const Header = () => {
	const onLogin = () => console.log('login');

	const onRegistration = () => console.log('reg');
	return (
		<header className={styles.header}>
			<div className={styles.hederContent}>
				<Logo />
				<div className={styles.registration}>
					<Button onclick={onLogin}> Войти </Button>
					<Button onclick={onRegistration}> Регистрация</Button>
				</div>
				<div>
					<Icon id="fa-heart-o" />
					<Icon id="fa-backward" />
				</div>
			</div>
		</header>
	);
};

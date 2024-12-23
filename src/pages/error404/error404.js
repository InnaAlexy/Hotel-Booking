import { Link } from 'react-router-dom';
import styles from './error404.module.css';

export const Error404 = () => {
	return (
		<div className={styles.conteiner}>
			<h1>404</h1>
			<div className={styles.errorMessage}>
				<div>К сожалению, страница не найдена, </div>
				<div>
					вернитесь назад или перейдите <Link to="/">на главную</Link>!
				</div>
			</div>
		</div>
	);
};

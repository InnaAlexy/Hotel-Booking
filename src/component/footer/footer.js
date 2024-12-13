import styles from './footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<div>Контакты</div>
				<div>Погода</div>
			</div>
		</footer>
	);
};

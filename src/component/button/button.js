import styles from './button.module.css';

export const Button = ({ onclick, children }) => {
	return (
		<button className={styles.button} onClick={onclick}>
			{children}
		</button>
	);
};

import styles from './button.module.css';

export const Button = ({ onclick, children, disabled, type }) => {
	return (
		<button
			type={type}
			className={styles.button}
			onClick={onclick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

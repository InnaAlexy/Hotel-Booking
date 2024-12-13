import styles from './icon.module.css';

export const Icon = ({ id }) => {
	return (
		<div className={styles.icon}>
			<i className={`fa ${id}`} aria-hidden="true"></i>
		</div>
	);
};

import styles from './logo.module.css';

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<i className="fa fa-tree" aria-hidden="true"></i>
			<div>
				<span className={styles.largeText}>Taiga</span>
				<span className={styles.smallText}>eco-hotel</span>
			</div>
		</div>
	);
};

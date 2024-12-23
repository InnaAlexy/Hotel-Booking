import { Icon } from '../../../component';
import styles from '../user-bookings.module.css';

export const TableRow = ({ id, title, dayStart, dayEnd, status }) => {
	return (
		<div className={styles.tableRow}>
			<div className={styles.titleColumn}>{title}</div>
			<div className={styles.dateStartColumn}>{dayStart}</div>
			<div className={styles.dateEndColumn}>{dayEnd}</div>
			<div className={styles.statusColumn}>{status}</div>

			<Icon id="fa-trash-o" />
		</div>
	);
};

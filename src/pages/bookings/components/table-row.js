import { Icon } from '../../../component';
import styles from '../bookings.module.css';

export const TableRow = ({
	id,
	title,
	roomId,
	userLogin,
	dayStart,
	dayEnd,
	status,
	statuses,
}) => {
	const onStatusChange = () => {};

	return (
		<div className={styles.tableRow}>
			<div className={styles.loginColumn}>{userLogin}</div>
			<div className={styles.titleColumn}>{title}</div>
			<div className={styles.dateStartColumn}>{dayStart}</div>
			<div className={styles.dateEndColumn}>{dayEnd}</div>
			<div className={styles.statusColumn}>
				<select value={status} onChange={onStatusChange}>
					{statuses.map(({ id, name: statusName }) => (
						<option key={id} value={statusName}>
							{statusName}
						</option>
					))}
				</select>
			</div>

			<Icon id="fa-trash-o" />
		</div>
	);
};

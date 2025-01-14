import { useState } from 'react';
import { Button, Icon } from '../../../component';
import styles from '../bookings.module.css';
import { useServerRequest } from '../../../hooks';

export const TableRow = ({
	id,
	title,
	roomId,
	userLogin,
	status,
	statuses,
	onBookingRemove,
	date,
}) => {
	const [actualStatus, setActualStatus] = useState(status);
	const [selectedStatus, setSelectedStatus] = useState(status);
	const [titleContent, setTitleContent] = useState(false);
	const requestServer = useServerRequest();
	const dayStart = date[0];
	const dayEnd = date[date.length - 1];

	const onStatusChange = ({ target }) => {
		setSelectedStatus(target.value);
	};

	const onStatusSave = (idOfBooking, newIdOfStatus) => {
		requestServer('updateBookingStatus', idOfBooking, newIdOfStatus).then(() =>
			setActualStatus(newIdOfStatus),
		);
	};

	const isSaveButtonDisabled = selectedStatus === actualStatus;

	return (
		<div className={styles.tableRow}>
			<div className={styles.loginColumn}>{userLogin}</div>
			<div
				className={styles.titleColumn}
				onMouseOver={() => setTitleContent(!titleContent)}
				onMouseOut={() => setTitleContent(!titleContent)}
			>
				{titleContent ? `номер:${roomId}` : title}
			</div>
			<div className={styles.dateStartColumn}>{dayStart}</div>
			<div className={styles.dateEndColumn}>{dayEnd}</div>
			<div className={styles.statusColumn}>
				<select value={selectedStatus} onChange={onStatusChange}>
					{statuses.map(({ id: idS, name }) => (
						<option key={idS} value={idS}>
							{name}
						</option>
					))}
				</select>
			</div>
			<div className={styles.iconRow}>
				{isSaveButtonDisabled ? (
					<div className={styles.disable}>
						<Icon id="fa-check" />
					</div>
				) : (
					<Button onclick={() => onStatusSave(id, selectedStatus)}>
						<Icon id="fa-check" />
					</Button>
				)}
				<Button onclick={onBookingRemove}>
					<Icon id="fa-trash-o" />
				</Button>
			</div>
		</div>
	);
};

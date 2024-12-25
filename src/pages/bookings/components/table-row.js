import { useState } from 'react';
import { Button, Icon } from '../../../component';
import styles from '../bookings.module.css';
import { useServerRequest } from '../../../hooks';

export const TableRow = ({
	id,
	title,
	roomId,
	userLogin,
	dayStart,
	dayEnd,
	statusId,
	statuses,
	onBookingRemove,
}) => {
	const [actualStatusId, setActualStatusId] = useState(statusId);
	const [selectedStatusId, setSelectedStatusId] = useState(statusId);
	const [titleContent, setTitleContent] = useState(false);
	const requestServer = useServerRequest();

	const onStatusChange = ({ target }) => {
		setSelectedStatusId(target.value);
	};

	const onStatusSave = (idOfBooking, newIdOfStatus) => {
		requestServer('updateBookingStatus', idOfBooking, newIdOfStatus).then(() =>
			setActualStatusId(newIdOfStatus),
		);
	};

	const isSaveButtonDisabled = selectedStatusId === actualStatusId;

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
				<select value={selectedStatusId} onChange={onStatusChange}>
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
					<Button onclick={() => onStatusSave(id, selectedStatusId)}>
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

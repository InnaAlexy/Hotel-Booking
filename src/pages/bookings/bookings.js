import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import styles from './bookings.module.css';
import { TableRow } from './components';

export const Bookings = () => {
	const [bookings, setBookings] = useState([]);
	const [statuses, setStatuses] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);

	const requestServer = useServerRequest();

	useEffect(() => {
		Promise.all([
			requestServer('fetchBookings'),
			requestServer('fetchStatuses'),
		]).then(([bookingsRes, statusesRes]) => {
			if (bookingsRes.error || statusesRes.error) {
				setErrorMessage(bookingsRes.error || statusesRes.error);

				return;
			}

			setBookings(bookingsRes.res);
			setStatuses(statusesRes.res);
		});
	}, [requestServer]);

	return (
		<div className={styles.conteiner}>
			<h2>Список бронирований</h2>
			<div className={styles.tableConteiner}>
				{errorMessage ? (
					<div>{errorMessage} </div>
				) : (
					<>
						<div className={styles.titleRow}>
							<div className={styles.loginColumn}>Имя гостя</div>
							<div className={styles.titleColumn}>Номер</div>
							<div className={styles.dateStartColumn}>Заезд</div>
							<div className={styles.dateEndColumn}>Выезд</div>
							<div className={styles.statusColumn}>Статус бронирования</div>
						</div>
						{bookings.map(
							({ id, title, userLogin, dayStart, dayEnd, status }) => (
								<TableRow
									key={id}
									id={id}
									title={title}
									userLogin={userLogin}
									dayStart={dayStart}
									dayEnd={dayEnd}
									status={status}
									statuses={statuses}
								/>
							),
						)}
					</>
				)}
			</div>
		</div>
	);
};

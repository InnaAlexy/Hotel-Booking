import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import styles from './bookings.module.css';
import { TableRow, TitleRow } from './components';

export const Bookings = () => {
	const [bookings, setBookings] = useState([]);
	const [statuses, setStatuses] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateList, setShouldUpdateList] = useState(false);

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
	}, [requestServer, shouldUpdateList]);

	const onBookingRemove = (idOfBooking) => {
		requestServer('removeBooking', idOfBooking).then(() => {
			setShouldUpdateList(!shouldUpdateList);
		});
	};

	return (
		<div className={styles.conteiner}>
			<h2>Список бронирований</h2>
			<div className={styles.tableConteiner}>
				{errorMessage ? (
					<div>{errorMessage} </div>
				) : (
					<>
						<TitleRow />
						{bookings.map(
							({
								id,
								title,
								userLogin,
								dayStart,
								dayEnd,
								statusId,
								roomId,
							}) => (
								<TableRow
									key={id}
									id={id}
									roomId={roomId}
									title={title}
									userLogin={userLogin}
									dayStart={dayStart}
									dayEnd={dayEnd}
									statusId={statusId}
									statuses={statuses}
									onBookingRemove={() => onBookingRemove(id)}
								/>
							),
						)}
					</>
				)}
			</div>
		</div>
	);
};

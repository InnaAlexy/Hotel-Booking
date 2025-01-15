import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import styles from './bookings.module.css';
import { TableRow, TitleRow } from './components';
import { Loader } from '../../component';

export const Bookings = () => {
	const [bookings, setBookings] = useState([]);
	const [statuses, setStatuses] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateList, setShouldUpdateList] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const requestServer = useServerRequest();

	useEffect(() => {
		setIsLoading(true);
		Promise.all([
			requestServer('fetchBookings'),
			requestServer('fetchStatuses'),
		]).then(([bookingsRes, statusesRes]) => {
			if (bookingsRes.error || statusesRes.error) {
				setErrorMessage(bookingsRes.error || statusesRes.error);
				setIsLoading(false);
				return;
			}

			setBookings(bookingsRes.res);
			setStatuses(statusesRes.res);
			setIsLoading(false);
		});
	}, [requestServer, shouldUpdateList]);

	const onBookingRemove = (idOfBooking) => {
		requestServer('removeBooking', idOfBooking).then(() => {
			setShouldUpdateList(!shouldUpdateList);
		});
	};

	if (isLoading) {
		return <Loader />;
	}
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
							({ id, title, userLogin, status, roomId, date }) => (
								<TableRow
									key={id}
									id={id}
									roomId={roomId}
									title={title}
									userLogin={userLogin}
									status={status}
									statuses={statuses}
									onBookingRemove={() => onBookingRemove(id)}
									date={date}
								/>
							),
						)}
					</>
				)}
			</div>
		</div>
	);
};

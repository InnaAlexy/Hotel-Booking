import { useSelector } from 'react-redux';
import { selectUserId } from '../../selectors';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import styles from './user-bookings.module.css';
import { TableRow } from './components';
import { Loader } from '../../component';

export const UserBookings = () => {
	const [userBookings, setUserBookings] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [shouldUpdateList, setShouldUpdateList] = useState(false);
	const userId = useSelector(selectUserId);
	const requestServer = useServerRequest();

	useEffect(() => {
		setIsLoading(true);
		requestServer('fetchUserBookings', userId).then((userBookingsRes) => {
			if (userBookingsRes.error) {
				setErrorMessage(userBookingsRes.error);
				setIsLoading(false);
				return;
			}
			if (userBookingsRes.res.length < 1) {
				setErrorMessage('У вас еще нет бронирований!');
				setIsLoading(false);
				return;
			}
			setUserBookings(userBookingsRes.res);
			setIsLoading(false);
		});
	}, [requestServer, userId, shouldUpdateList]);

	const onBookingRemove = (idOfBooking) => {
		requestServer('removeBooking', idOfBooking).then((res) => {
			setShouldUpdateList(!shouldUpdateList);
		});
	};

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className={styles.conteiner}>
			<h2>Мои бронирования</h2>
			<div className={styles.tableConteiner}>
				{errorMessage ? (
					<div>{errorMessage} </div>
				) : (
					<>
						<div className={styles.titleRow}>
							<div className={styles.titleColumn}>Номер</div>
							<div className={styles.dateStartColumn}>Заезд</div>
							<div className={styles.dateEndColumn}>Выезд</div>
							<div className={styles.statusColumn}>Статус бронирования</div>
						</div>
						{userBookings.map(({ id, roomId, title, date, status }) => (
							<TableRow
								id={id}
								key={id}
								roomId={roomId}
								title={title}
								date={date}
								status={status}
								onBookingRemove={() => onBookingRemove(id)}
							/>
						))}
					</>
				)}
			</div>
		</div>
	);
};

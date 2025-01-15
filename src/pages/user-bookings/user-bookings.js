import { useSelector } from 'react-redux';
import { selectUserId, selectUserRole } from '../../selectors';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import styles from './user-bookings.module.css';
import { TableRow } from './components';
import { Error, Loader } from '../../component';
import { checkAccess } from '../../utils';
import { ERROR, ROLE } from '../../constants';

export const UserBookings = () => {
	const [userBookings, setUserBookings] = useState([]);
	const [error, setError] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [shouldUpdateList, setShouldUpdateList] = useState(false);
	const userRole = useSelector(selectUserRole);
	const userId = useSelector(selectUserId);
	const requestServer = useServerRequest();

	useEffect(() => {
		setIsLoading(true);
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			setError(ERROR.ACCESS_ERROR);
			setIsLoading(false);

			return;
		}
		requestServer('fetchUserBookings', userId).then((userBookingsRes) => {
			if (userBookingsRes.error) {
				setError(userBookingsRes.error);
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
	}, [requestServer, userId, shouldUpdateList, userRole]);

	const onBookingRemove = (idOfBooking) => {
		requestServer('removeBooking', idOfBooking).then((res) => {
			setShouldUpdateList(!shouldUpdateList);
		});
	};

	if (isLoading) {
		return <Loader />;
	}

	return error ? (
		<Error error={error} />
	) : (
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

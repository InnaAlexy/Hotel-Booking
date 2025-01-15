import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import styles from './bookings.module.css';
import { TableRow, TitleRow } from './components';
import { Error, Loader } from '../../component';
import { ERROR, ROLE } from '../../constants';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';
import { checkAccess } from '../../utils';

export const Bookings = () => {
	const [bookings, setBookings] = useState([]);
	const [statuses, setStatuses] = useState([]);
	const [error, setError] = useState('');
	const [shouldUpdateList, setShouldUpdateList] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const userRole = useSelector(selectUserRole);

	const requestServer = useServerRequest();

	useEffect(() => {
		setIsLoading(true);

		if (!checkAccess([ROLE.ADMIN], userRole)) {
			setError(ERROR.ACCESS_ERROR);
			setIsLoading(false);

			return;
		}

		Promise.all([
			requestServer('fetchBookings'),
			requestServer('fetchStatuses'),
		]).then(([bookingsRes, statusesRes]) => {
			if (bookingsRes.error || statusesRes.error) {
				setError(bookingsRes.error || statusesRes.error);
				setIsLoading(false);

				return;
			}

			setBookings(bookingsRes.res);
			setStatuses(statusesRes.res);
			setIsLoading(false);
		});
	}, [requestServer, shouldUpdateList, userRole]);

	const onBookingRemove = (idOfBooking) => {
		requestServer('removeBooking', idOfBooking).then(() => {
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
			<h2>Список бронирований</h2>
			<div className={styles.tableConteiner}>
				<TitleRow />
				{bookings.map(({ id, title, userLogin, status, roomId, date }) => (
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
				))}
			</div>
		</div>
	);
};

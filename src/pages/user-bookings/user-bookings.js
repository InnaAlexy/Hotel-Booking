import { useSelector } from 'react-redux';
import { selectUserLogin } from '../../selectors';
import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import styles from './user-bookings.module.css';
import { TableRow } from './components';

export const UserBookings = () => {
	const [userBookings, setUserBookings] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);

	const userLogin = useSelector(selectUserLogin);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchUserBookings', userLogin).then((userBookingsRes) => {
			if (userBookingsRes.error) {
				setErrorMessage(userBookingsRes.error);
				return;
			}

			setUserBookings(userBookingsRes.res);
		});
	}, [requestServer, userLogin]);

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
						{userBookings.map(({ id, title, dayStart, dayEnd, status }) => (
							<TableRow
								key={id}
								id={id}
								title={title}
								userLogin={userLogin}
								dayStart={dayStart}
								dayEnd={dayEnd}
								status={status}
							/>
						))}
					</>
				)}
			</div>
		</div>
	);
};

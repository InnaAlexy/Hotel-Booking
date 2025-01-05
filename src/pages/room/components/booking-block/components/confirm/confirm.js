import { useSelector } from 'react-redux';
import { Button, Icon } from '../../../../../../component';
import styles from './confirm.module.css';
import { selectRoom, selectUserId, selectUserLogin } from '../../../../../../selectors';
import { useServerRequest } from '../../../../../../hooks';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

export const Confirm = ({ onClose, desiredDates }) => {
	const room = useSelector(selectRoom);
	const userLogin = useSelector(selectUserLogin);
	const userId = useSelector(selectUserId);
	const [serverError, setServerError] = useState('');
	const [successBooking, setSuccessBooking] = useState(false);
	const requestServer = useServerRequest();

	const onNewBookingAdd = (room, userId, userLogin, desiredDates) => {
		requestServer('booking', room, userId, userLogin, desiredDates).then(
			({ error, res }) => {
				if (error) {
					setServerError(`Ошибка запроса: ${error}`);
					return;
				}

				setSuccessBooking(true);
			},
		);
	};

	if (successBooking) {
		return <Navigate to="/myBooking" />;
	}

	return (
		<div className={styles.confirmConteiner}>
			<div className={styles.confirm}>
				<div className={styles.closeButton}>
					<Icon id="fa-window-close-o" onClick={onClose} />
				</div>
				{serverError ? (
					<div>{serverError}</div>
				) : (
					<>
						<div className={styles.confirmMessage}>
							Выбранные вами даты свободны, желаете забронировать?
						</div>
						<Button
							onclick={() =>
								onNewBookingAdd(room, userId, userLogin, desiredDates)
							}
						>
							Подтвердить
						</Button>
					</>
				)}
			</div>
		</div>
	);
};

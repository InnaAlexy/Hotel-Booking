import { STATUS } from '../constants';

export const addBooking = (room, userId, userLogin, desiredDates) =>
	fetch('http://localhost:3007/bookings', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			title: room.title,
			room_id: room.id,
			user_id: userId,
			user_login: userLogin,
			date: desiredDates,
			status_id: STATUS.WAITING,
		}),
	}).then((createdBooking) => createdBooking.json());

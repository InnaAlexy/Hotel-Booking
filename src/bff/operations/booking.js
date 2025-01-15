import { addBooking } from '../api';
import { ERROR, ROLE } from '../constants';
import { sessions } from '../sessions';

export const booking = async (hash, room, userId, userLogin, desiredDates) => {
	const accessRoles = [ROLE.GEST, ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: ERROR.ACCESS_ERROR,
			res: null,
		};
	}

	const newBooking = await addBooking(room, userId, userLogin, desiredDates);

	if (!newBooking) {
		return {
			error: ERROR.OTHER,
			res: null,
		};
	}

	return {
		error: null,
		res: {
			title: newBooking.title,
			roomId: newBooking.room_id,
			userId: newBooking.user_id,
			userLogin: newBooking.user_login,
			date: newBooking.date,
			status: newBooking.status,
		},
	};
};

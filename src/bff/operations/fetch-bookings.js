import { getBookings } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const fetchBookings = async (userSession) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const bookings = await getBookings();

	return {
		error: null,
		res: bookings,
	};
};

import { getBookings } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const fetchBookings = async (hash) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
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

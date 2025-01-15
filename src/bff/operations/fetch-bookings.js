import { getBookings } from '../api';
import { ERROR, ROLE } from '../constants';
import { sessions } from '../sessions';

export const fetchBookings = async (hash) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: ERROR.ACCESS_ERROR,
			res: null,
		};
	}

	const bookings = await getBookings();

	return {
		error: null,
		res: bookings,
	};
};

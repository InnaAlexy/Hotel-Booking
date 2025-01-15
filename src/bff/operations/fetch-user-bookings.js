import { getUserBookings } from '../api';
import { ERROR, ROLE } from '../constants';
import { sessions } from '../sessions';

export const fetchUserBookings = async (hash, userId) => {
	const accessRoles = [ROLE.GEST, ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: ERROR.ACCESS_ERROR,
			res: null,
		};
	}

	const userBookings = await getUserBookings(userId);

	return {
		error: null,
		res: userBookings,
	};
};

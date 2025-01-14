import { getUserBookings } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const fetchUserBookings = async (hash, userId) => {
	const accessRoles = [ROLE.GEST, ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const userBookings = await getUserBookings(userId);

	return {
		error: null,
		res: userBookings,
	};
};

import { getUserBookings } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const fetchUserBookings = async (hash, loginToFind) => {
	const accessRoles = [ROLE.GEST];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const userBookings = await getUserBookings(loginToFind);

	if (!!userBookings.res) {
		return {
			error: 'У вас еще нет бронирований!',
			res: null,
		};
	}

	return {
		error: null,
		res: userBookings,
	};
};

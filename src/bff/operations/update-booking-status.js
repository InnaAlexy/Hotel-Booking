import { setBookingStatus } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const updateBookingStatus = async (hash, bookingId, newStatusId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	setBookingStatus(bookingId, newStatusId);

	return {
		error: null,
		res: true,
	};
};

import { setBookingStatus } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const updateBookingStatus = async (hash, bookingId, newStatus) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	setBookingStatus(bookingId, newStatus);

	return {
		error: null,
		res: true,
	};
};

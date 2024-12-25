import { setBookingStatus } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const updateBookingStatus = async (userSession, bookingId, newStatusId) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
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

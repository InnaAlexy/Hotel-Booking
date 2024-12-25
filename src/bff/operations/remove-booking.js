import { deleteBooking } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const removeBooking = async (userSession, idOfBooking) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	deleteBooking(idOfBooking);
};

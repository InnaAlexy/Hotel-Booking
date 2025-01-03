import { deleteBooking } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const removeBooking = async (hash, idOfBooking) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	deleteBooking(idOfBooking);
};

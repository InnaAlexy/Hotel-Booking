import { deleteBooking } from '../api';
import { ERROR, ROLE } from '../constants';
import { sessions } from '../sessions';

export const removeBooking = async (hash, idOfBooking) => {
	const accessRoles = [ROLE.ADMIN, ROLE.GEST];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: ERROR.ACCESS_ERROR,
			res: null,
		};
	}

	deleteBooking(idOfBooking);
};

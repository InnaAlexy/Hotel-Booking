import { getStatuses } from '../api';
import { ERROR, ROLE } from '../constants';
import { sessions } from '../sessions';

export const fetchStatuses = async (hash) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: ERROR.ACCESS_ERROR,
			res: null,
		};
	}

	const statuses = await getStatuses();

	return {
		error: null,
		res: statuses,
	};
};

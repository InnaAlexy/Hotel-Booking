import { getStatuses } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const fetchStatuses = async (hash) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const statuses = await getStatuses();

	return {
		error: null,
		res: statuses,
	};
};

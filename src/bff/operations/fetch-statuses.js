import { getStatuses } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const fetchStatuses = async (userSession) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
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

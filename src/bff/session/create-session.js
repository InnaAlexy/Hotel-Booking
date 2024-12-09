import { ROLE } from '../../constants';
import { removeBoking } from './remove-boking';

export const createSession = (roleId) => {
	const session = {
		logout() {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeBoking;
			break;
		}
		case ROLE.GEST: {
			break;
		}
		default: //ничего не делать
	}

	return session;
};

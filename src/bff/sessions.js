import { addSession, getSession, deleteSession } from './api';

export const sessions = {
	create(user) {
		const hash = Math.random().toFixed(50);
		addSession(hash, user);

		return hash;
	},
	async remove(hash) {
		const sessions = await getSession(hash);

		if (!sessions) {
			return;
		}
		deleteSession(sessions.id);
	},
	async access(hash, accessRoles) {
		const dbSession = await getSession(hash);

		return !!dbSession.user && accessRoles.includes(dbSession.user.roleId);
	},
};

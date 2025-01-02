import { getBookings, getRoom } from '../api';
// import { ROLE } from '../constants';
// import { sessions } from '../sessions';

export const fetchRoom = async (roomId) => {
	// const accessRoles = [ROLE.VIEWER];

	// if (sessions.access(userSession, accessRoles)) {
	// 	return {
	// 		error: 'Доступ запрещен',
	// 		res: null,
	// 	};
	// }

	const room = await getRoom(roomId);
	const bookings = await getBookings();

	return {
		error: null,
		res: {
			...room,
			bookings,
		},
	};
};

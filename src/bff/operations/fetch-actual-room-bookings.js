import { getRoomBookings } from '../api';
import { ERROR, ROLE } from '../constants';
import { sessions } from '../sessions';

export const fetchActualRoomBookings = async (hash, roomId) => {
	const accessRoles = [ROLE.GEST, ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: ERROR.ACCESS_ERROR,
			res: null,
		};
	}

	const bookings = await getRoomBookings(roomId);

	const arrayofdatesbusy = bookings ? bookings.map((e) => e.date).flat() : [];

	return {
		error: null,
		res: arrayofdatesbusy,
	};
};

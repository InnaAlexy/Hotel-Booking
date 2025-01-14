import { getRooms } from '../api';

export const fetchRooms = async () => {
	const rooms = await getRooms();

	return {
		error: null,
		res: rooms,
	};
};

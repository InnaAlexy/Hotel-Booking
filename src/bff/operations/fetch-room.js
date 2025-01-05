import { getRoom } from '../api';

export const fetchRoom = async (roomId) => {
	const room = await getRoom(roomId);

	return {
		error: null,
		res: {
			...room,
		},
	};
};

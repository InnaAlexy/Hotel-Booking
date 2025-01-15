import { getRoom } from '../api';

export const fetchRoom = async (roomId) => {
	let room;
	let error;
	try {
		room = await getRoom(roomId);
	} catch (dataError) {
		error = dataError;
	}

	if (error) {
		return {
			error,
			res: null,
		};
	}

	return {
		error: null,
		res: room,
	};
};

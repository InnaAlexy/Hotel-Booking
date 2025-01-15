import { ERROR } from '../constants';
import { transformRoom } from '../transformers';

export const getRoom = async (roomId) =>
	fetch(`http://localhost:3007/rooms/${roomId}`)
		.then((res) => {
			if (res.ok) {
				console.log(res);

				return res;
			}

			const error = res.status === 404 ? ERROR.PAGE_NOT_FOUND : ERROR.OTHER;

			return Promise.reject(error);
		})
		.then((loadedRoom) => loadedRoom.json())
		.then((loadedRoom) => loadedRoom && transformRoom(loadedRoom));

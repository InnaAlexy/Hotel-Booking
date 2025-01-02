import { transformRoom } from '../transformers';

export const getRoom = async (roomId) =>
	fetch(`http://localhost:3007/rooms/${roomId}`)
		.then((loadedRoom) => loadedRoom.json())
		.then((loadedRoom) => loadedRoom && transformRoom(loadedRoom));

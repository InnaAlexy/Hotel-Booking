import { transformRoom } from '../transformers';

export const getRooms = async () =>
	fetch(`http://localhost:3007/rooms`)
		.then((loadedRooms) => loadedRooms.json())
		.then((loadedRooms) => loadedRooms && loadedRooms.map(transformRoom));

import { setRoomData } from './set-room-data';

export const loadRoomAsync = (requestServer, roomId) => (dispatch) =>
	requestServer('fetchRoom', roomId).then((roomData) => {
		if (roomData.res) {
			dispatch(setRoomData(roomData.res));
		}
		return roomData;
	});

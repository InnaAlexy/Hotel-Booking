import { setRoomData } from './set-room-data';

export const loadRoomAsync = (requestServer, roomId) => (dispatch) => {
	requestServer('fetchRoom', roomId).then((roomData) =>
		dispatch(setRoomData(roomData.res)),
	);
};

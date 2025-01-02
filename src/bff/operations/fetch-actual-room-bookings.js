import { getRoomBookings } from '../api';

export const fetchActualRoomBookings = async (roomId) => {
	const bookings = await getRoomBookings(roomId);

	const arrayofdatesbusy = bookings ? bookings.map((e) => e.date).flat() : [];

	return {
		error: null,
		res: arrayofdatesbusy,
	};
};

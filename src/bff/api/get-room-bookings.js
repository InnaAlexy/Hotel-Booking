export const getRoomBookings = (roomId) =>
	fetch(`http://localhost:3007/bookings?room_id=${roomId}`).then((loadedBookings) =>
		loadedBookings.json(),
	);

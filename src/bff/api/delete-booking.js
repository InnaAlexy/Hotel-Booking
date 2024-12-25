export const deleteBooking = (idOfBooking) =>
	fetch(`http://localhost:3007/bookings/${idOfBooking}`, {
		method: 'DELETE',
	});

export const setBookingStatus = (bookingId, newStatus) =>
	fetch(`http://localhost:3007/bookings/${bookingId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			status: newStatus,
		}),
	});

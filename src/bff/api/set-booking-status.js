export const setBookingStatus = (bookingId, newStatusId) =>
	fetch(`http://localhost:3007/bookings/${bookingId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			status_id: newStatusId,
		}),
	});

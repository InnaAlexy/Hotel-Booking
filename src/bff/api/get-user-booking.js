import { transformBooking } from '../transformers';

export const getUserBookings = (userId) =>
	fetch(`http://localhost:3007/bookings?user_id=${userId}`)
		.then((loadedBookings) => loadedBookings.json())
		.then((loadedBookings) => loadedBookings && loadedBookings.map(transformBooking));

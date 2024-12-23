import { transformBooking } from '../transformers';

export const getUserBookings = (loginToFind) =>
	fetch(`http://localhost:3007/bookings?user_login=${loginToFind}`)
		.then((loadedBookings) => loadedBookings.json())
		.then((loadedBookings) => loadedBookings && loadedBookings.map(transformBooking));

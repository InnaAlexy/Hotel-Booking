import { transformBooking } from '../transformers';

export const getBookings = () =>
	fetch('http://localhost:3007/bookings')
		.then((loadedBookings) => loadedBookings.json())
		.then((loadedBookings) => loadedBookings && loadedBookings.map(transformBooking));

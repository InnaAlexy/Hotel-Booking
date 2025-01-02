import {
	authorize,
	logout,
	register,
	fetchBookings,
	fetchStatuses,
	fetchUserBookings,
	updateBookingStatus,
	removeBooking,
	fetchRoom,
	fetchActualRoomBookings,
} from './operations';

export const server = {
	logout,
	authorize,
	register,
	fetchBookings,
	fetchStatuses,
	fetchUserBookings,
	updateBookingStatus,
	removeBooking,
	fetchRoom,
	fetchActualRoomBookings,
};

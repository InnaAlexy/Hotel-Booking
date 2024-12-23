import { authorize, logout, register, fetchBookings, fetchStatuses } from './operations';

export const server = {
	logout,
	authorize,
	register,
	fetchBookings,
	fetchStatuses,
};

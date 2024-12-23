export const transformBooking = (dbBooking) => ({
	id: dbBooking.id,
	title: dbBooking.title,
	roomId: dbBooking.room_id,
	userId: dbBooking.user_id,
	userLogin: dbBooking.user_login,
	dayStart: dbBooking.day_start,
	dayEnd: dbBooking.day_end,
	date: dbBooking.date,
	status: dbBooking.status,
});

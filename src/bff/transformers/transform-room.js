export const transformRoom = (dbRoom) => ({
	id: dbRoom.id,
	title: dbRoom.title,
	imgUrl: dbRoom.img_url,
	content: dbRoom.content,
	maxCapacity: dbRoom.max_capacity,
});

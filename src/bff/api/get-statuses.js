export const getStatuses = () =>
	fetch('http://localhost:3007/statuses').then((loadedStatuses) =>
		loadedStatuses.json(),
	);

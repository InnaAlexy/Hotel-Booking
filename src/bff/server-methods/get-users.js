export const getUsers = () =>
	fetch('http://localhost3007/users').then((loadedUser) => loadedUser.json());

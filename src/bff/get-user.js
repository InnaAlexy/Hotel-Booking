export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3007/users?login=${loginToFind}`).then((loadedUser) =>
		loadedUser.json().then((data) => data[0]),
	);

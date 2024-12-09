import { generateDate } from '../generate-date';

export const addUser = (login, password) =>
	fetch('http://localhost3007/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registred_at: generateDate(),
			role_id: 2,
		}),
	});

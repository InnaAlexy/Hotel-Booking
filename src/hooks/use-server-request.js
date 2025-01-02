import { useSelector } from 'react-redux';
import { selectUserSession } from '../selectors';
import { useCallback } from 'react';
import { server } from '../bff';

export const useServerRequest = () => {
	const session = useSelector(selectUserSession);

	return useCallback(
		(operation, ...params) => {
			const request = [
				'register',
				'authorize',
				'fetchRoom',
				'fetchActualRoomBookings',
			].includes(operation)
				? params
				: [session, ...params];

			return server[operation](...request);
		},
		[session],
	);
};

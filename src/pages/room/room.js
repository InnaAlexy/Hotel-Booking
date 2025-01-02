import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BookingBlock, RoomInfo } from './components';
import { selectRoom } from '../../selectors';
import { useServerRequest } from '../../hooks';
import { loadRoomAsync } from '../../actions';
import { useEffect } from 'react';

export const Room = () => {
	const dispatch = useDispatch();
	const room = useSelector(selectRoom);
	const params = useParams();
	const requestServer = useServerRequest();

	useEffect(() => {
		dispatch(loadRoomAsync(requestServer, params.roomId));
	}, [dispatch, params.roomId, requestServer]);

	return (
		<>
			<RoomInfo room={room} />
			<BookingBlock actualRoomId={room.id} />
		</>
	);
};

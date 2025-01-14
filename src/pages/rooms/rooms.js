import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import styles from './rooms.module.css';
import { RoomCard } from './components';

export const Rooms = () => {
	const [rooms, setRooms] = useState([]);

	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchRooms').then((loadedData) => {
			setRooms(loadedData.res);
		});
	}, [requestServer]);

	return (
		<div className={styles.conteiner}>
			{rooms.length > 0 ? (
				<div className={styles.roomsList}>
					{rooms.map(({ id, imgUrl, title, maxCapacity, price }) => (
						<RoomCard
							key={id}
							id={id}
							imgUrl={imgUrl}
							title={title}
							maxCapacity={maxCapacity}
							price={price}
						/>
					))}
				</div>
			) : (
				<div className={styles.noPostsFound}>Номера не найдены</div>
			)}
		</div>
	);
};

import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './component';
import { Authorization, Bookings, Error404, Registration, UserBookings } from './pages';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.appColomn}>
			<Header />
			<div className={styles.content}>
				<Routes>
					<Route path="/" element={<div>Главная</div>}></Route>
					<Route path="/login" element={<Authorization />}></Route>
					<Route path="/register" element={<Registration />}></Route>
					<Route path="/bookings" element={<Bookings />}></Route>
					<Route path="/rooms" element={<div>Выбор номеров</div>}></Route>
					<Route path="/room/:roomId" element={<div>Номер</div>}></Route>
					<Route path="/myBooking" element={<UserBookings />}></Route>
					<Route path="*" element={<Error404 />}></Route>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;

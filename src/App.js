import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './component';
import {
	AboutUs,
	Authorization,
	Bookings,
	Error404,
	Main,
	Registration,
	Room,
	UserBookings,
} from './pages';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.substrate}>
			<div className={styles.appColomn}>
				<Header />
				<div className={styles.content}>
					<Routes>
						<Route path="/" element={<Main />}></Route>
						<Route path="/aboutUs" element={<AboutUs />}></Route>
						<Route path="/login" element={<Authorization />}></Route>
						<Route path="/register" element={<Registration />}></Route>
						<Route path="/bookings" element={<Bookings />}></Route>
						<Route path="/rooms" element={<div>Выбор номеров</div>}></Route>
						<Route path="/rooms/:roomId" element={<Room />}></Route>
						<Route path="/myBooking" element={<UserBookings />}></Route>
						<Route
							path="/bookingPage"
							element={<div>cтр бронирования</div>}
						></Route>
						<Route path="*" element={<Error404 />}></Route>
					</Routes>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;

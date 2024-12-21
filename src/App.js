import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './component';
import { Authorization, Registration } from './pages';
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
					<Route
						path="/reserves"
						element={<div>Список бронирований</div>}
					></Route>
					<Route path="/rooms" element={<div>Выбор номеров</div>}></Route>
					<Route path="/room/:roomId" element={<div>Номер</div>}></Route>
					<Route
						path="/myBooking"
						element={<div>Мои бронирования</div>}
					></Route>
					<Route path="*" element={<div>Ошибка</div>}></Route>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;

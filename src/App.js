import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
	text-align: center;
`;

export const Header = () => {
	return <div></div>;
};

export const Footer = () => {
	return <div></div>;
};

function App() {
	return (
		<>
			<Header />
			<Content>
				<h2> Заголовок </h2>
				<Routes>
					<Route path="/" element={<div>Главная</div>}></Route>
					<Route path="/login" element={<div>Вход</div>}></Route>
					<Route path="/register" element={<div>Регистрация</div>}></Route>
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
			</Content>
			<Footer />
		</>
	);
}

export default App;

import { Button, Icon } from '../../../../../../component';
import styles from './confirm.module.css';

export const Confirm = ({ setToutched }) => {
	const onClose = () => {
		setToutched(false);
	};

	const onNewBookingAdd = () => {
		console.log('t');
	};

	return (
		<div className={styles.confirmConteiner}>
			<div className={styles.confirm}>
				<div className={styles.closeButton}>
					<Icon id="fa-window-close-o" onClick={onClose} />
				</div>
				<div className={styles.confirmMessage}>
					Выбранные вами даты свободны, желаете забронировать?
				</div>
				<Button onclick={() => onNewBookingAdd()}>Подтвердить</Button>
			</div>
		</div>
	);
};

import PropTypes from 'prop-types';
import styles from './Field.module.css';
import { handler } from '../../handlers/handler';
import { useGetState } from '../../hooks/use-get-state';

export const FieldContainer = () => {
	const state = useGetState();
	const { field } = state;
	return (
		<div className={styles.field}>
			{field.map((item, index) => (
				<button
					className={styles.button}
					disabled={field[index]}
					key={index}
					onClick={() => {
						handler(index);
					}}
				>
					{field[index]}
				</button>
			))}
		</div>
	);
};

FieldContainer.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
